import React from "react";

import { idCreator, clog } from "./CommFuc";
import { dataTransforValid, getInternalDataType } from "./DataTypes";
import { LvtNode, LvtNodeOptions } from "./LvtNode";
import { LvtPort } from "./LvtPort";

interface IEdgeParams {
  source: string;
  sourceHandle: string;
  target: string;
  targetHandle: string;
}

interface IRenderData {
  v: {
    dataType: string;
    data: any;
  };
}

export class LvtFlow {
  data: any;
  dataVersion: number;
  // project
  projectId: number;
  // current
  currentElement: LvtNode | null;
  currentElementRenderSeed: number | undefined;
  // output
  outputSource: LvtPort | null;
  outputSourceRenderSeed: number | undefined;
  // render
  renderData: IRenderData | null;
  rendererId: string | undefined;
  // map
  renderMapSeed: number | undefined;

  // version
  version: string;

  // ui rerenderer for react
  static uiReRenderer: React.Dispatch<React.SetStateAction<string>> | undefined;

  // =======================================
  // constructor
  // =======================================
  constructor() {
    this.data = [];
    this.dataVersion = 0;
    this.projectId = 1;
    this.currentElement = null;
    this.outputSource = null;
    this.renderData = null;
    // fixed
    this.version = "1.0";
    // expose to window
    (window as any).lvtFlow = this;
    //
    this.isValidConnection = this.isValidConnection.bind(this);
  }

  // =======================================
  // current
  // =======================================
  setCurrentElement(id: string | null) {
    if (id) {
      const ele = this.data.find((n: LvtNode) => n.id === id);
      // auto set output
      if (ele.data.portsOut.length === 1) {
        this.setOutputSource(ele.data.portsOut[0]);
      } else if (ele.data.portsOut.length > 1) {
        ele.data.portsOut.forEach((port: any) => {
          if (port.asDefaultOutput) {
            this.setOutputSource(port);
          }
        });
      }
      this.currentElement = ele;
    } else {
      this.currentElement = null;
      this.setOutputSource(null);
    }
    this.reRenderUI(["currentElement"]);
  }

  // =======================================
  // output source
  // =======================================
  setOutputSource(port: LvtPort | null) {
    if (port) {
      this.outputSource = port;
    } else {
      this.outputSource = null;
    }
    this.reRenderUI(["outputSource"]);
  }

  // =======================================
  // nodes
  // =======================================
  addNode(options: LvtNodeOptions, doUpdate = true) {
    const node = new LvtNode({
      ...options,
      dataVersion: this.dataVersion,
      doUpdate: doUpdate,
    });
    this.data.push(node);
    return node;
  }

  removeNode(nodeId: string) {
    for (let i = 0; i < this.data.length; i += 1) {
      const node = this.data[i];
      if (node.id === nodeId) {
        // remove edges
        const edges = node.getAllEdges();
        if (edges) {
          edges.forEach(async (edge: any) => {
            await this.removeEdge(edge);
          });
        }
        // remove node data
        this.data.splice(i, 1);
        break;
      }
    }
  }

  getNodeById(id: string) {
    return this.data.find((n: LvtNode) => n.id === id);
  }

  async asyncUpdateNode(node: LvtNode) {
    return new Promise((resolve) => {
      setTimeout(async () => {
        const t1 = new Date().getTime();
        await node.update?.(node);
        const t2 = new Date().getTime();
        clog.log("Node", `update ${node.nodeId}: ${t2 - t1}ms`);
        resolve(node);
      }, 0);
    });
  }

  // =======================================
  // project
  // =======================================
  updateprojectId() {
    this.projectId += 1;
  }

  // =======================================
  // data update
  // =======================================
  async updateNodesFromNode(id: string) {
    // check if node exist
    const fromNode = this.getNodeById(id);
    if (fromNode) {
      const t1 = new Date().getTime();
      // step 1:
      // increase the data version
      this.dataVersion += 1;
      const curDataVersion = this.dataVersion;

      // step 2:
      // find all affected nodes
      let affectedNodes: string[] = [];
      const addAffectNode = (id: string) => {
        affectedNodes.push(id);
        const node = this.getNodeById(id);
        if (node.data.portsOut?.length > 0) {
          for (let p = 0, pl = node.data.portsOut.length; p < pl; p += 1) {
            for (
              let t = 0, tl = node.data.portsOut[p].targets.length;
              t < tl;
              t += 1
            ) {
              addAffectNode(node.data.portsOut[p].targets[t].id);
            }
          }
        }
      };
      addAffectNode(id);
      affectedNodes = Array.from(new Set(affectedNodes));

      // step 3:
      // update all unaffected node data version
      for (let i = 0, n = this.data.length; i < n; i += 1) {
        const node = this.data[i];
        if (
          affectedNodes.indexOf(node.id) === -1 &&
          node.dataVersion === this.dataVersion - 1
        ) {
          node.dataVersion = this.dataVersion;
        }
      }

      // step 4:
      // start update the affect nodes
      await this.cUpdateNode(id, curDataVersion);

      // finish
      const t2 = new Date().getTime();
      clog.log("Flow", `update flow: v[${curDataVersion}] in ${t2 - t1}ms`);
      this.reRenderUI(["renderMap", "outputSource"]);
    }
  }

  // =======================================
  // data update
  // =======================================
  async updateNodesUntilNode(id: string | undefined) {
    if (id) {
      const curDataVersion = this.dataVersion;
      const t1 = new Date().getTime();
      await this.cUpdateNode(id, curDataVersion);
      const t2 = new Date().getTime();
      clog.log("Flow", `update flow: v[${curDataVersion}] in ${t2 - t1}ms`);
      this.reRenderUI(["renderMap"]);
    }
  }

  async cUpdateDepNode(id: string, curDataVersion: number) {
    const node = this.getNodeById(id);
    if (node) {
      if (node.dataVersion === this.dataVersion) {
        return true;
      } else {
        if (node.data.portsIn?.length > 0) {
          for (let i = 0, p = node.data.portsIn.length; i < p; i += 1) {
            if (node.data.portsIn[i].source?.id) {
              await this.cUpdateDepNode(
                node.data.portsIn[i].source?.id,
                curDataVersion
              );
            }
          }
        }
        // do update only for latest data version
        if (curDataVersion === this.dataVersion) {
          await this.asyncUpdateNode(node);
          node.dataVersion = curDataVersion;
        }
        return true;
      }
    }
  }

  async cUpdateNode(id: string, curDataVersion: number) {
    // step 1:
    // update all deps and self
    await this.cUpdateDepNode(id, curDataVersion);
    const node = this.getNodeById(id);

    // step 2:
    // update children
    if (node && node.data.portsOut?.length > 0) {
      for (let p = 0, pl = node.data.portsOut.length; p < pl; p += 1) {
        for (
          let t = 0, tl = node.data.portsOut[p].targets.length;
          t < tl;
          t += 1
        ) {
          await this.cUpdateNode(
            node.data.portsOut[p].targets[t].id,
            curDataVersion
          );
        }
      }
    }
    return true;
  }

  // =======================================
  // edges
  // =======================================
  isValidConnection(params: any) {
    const sourcePort = this.getNodeById(params.source).getPortOutByName(
      params.sourceHandle
    );
    const sourceInternalDataType = getInternalDataType(sourcePort.dataType);
    const targetPort = this.getNodeById(params.target).getPortInByName(
      params.targetHandle
    );
    const targetInternalDataType = getInternalDataType(targetPort.dataType);
    // console.log(
    //   `try connect: ${sourcePort.dataType}(${sourceInternalDataType}) - ${
    //     targetPort.dataType
    //   }(${targetInternalDataType}): ${dataTransforValid(
    //     sourceInternalDataType,
    //     targetInternalDataType
    //   )}`
    // );
    return dataTransforValid(sourceInternalDataType, targetInternalDataType);
  }

  addEdge(params: IEdgeParams | any, doUpdate = true) {
    const source = this.getNodeById(params.source);
    const sourcePort = source?.getPortOutByName(params.sourceHandle);
    const target = this.getNodeById(params.target);
    const targetPort = target?.getPortInByName(params.targetHandle);
    // set target port source
    targetPort?.setSource({
      id: params.source,
      portName: params.sourceHandle,
    });
    // set source port target
    sourcePort?.addTarget({
      id: params.target,
      portName: params.targetHandle,
    });
    // set target value
    targetPort?.setValueObj(sourcePort?.value);
    // set render
    if (target?.isRenderer) {
      this.setRenderer(target);
    }
    // update
    if (doUpdate) {
      this.updateNodesFromNode(params.target);
    }
  }

  async removeEdge(params: IEdgeParams | any) {
    const source = this.getNodeById(params.source);
    const sourcePort = source?.getPortOutByName(params.sourceHandle);
    const target = this.getNodeById(params.target);
    const targetPort = target?.getPortInByName(params.targetHandle);
    if (source && sourcePort && target && targetPort) {
      // remove target port source
      targetPort.removeSource();
      // remove source port target
      sourcePort.removeTarget({
        id: params.target,
        portName: params.targetHandle,
      });
      // set target value
      // targetPort.cloneValue(sourcePort.value);
      targetPort.resetValue();
      // set render
      if (target.isRenderer && this.rendererId === target.id) {
        this.removeRenderer();
      }
      await this.updateNodesFromNode(params.target);
      return true;
    }
    return false;
  }

  // =======================================
  // renderer
  // =======================================
  setRenderer(node: LvtNode) {
    const rendererPort = node?.data?.portsOut.find((n) => n.isRenderSource);
    if (rendererPort) {
      (this.renderData as any) = rendererPort.value;
      this.rendererId = node.id;
    }
  }
  removeRenderer() {
    this.renderData = null;
    this.rendererId = undefined;
  }

  // =======================================
  // UI support for React
  // Enable rerender
  // =======================================
  static setUIReRenderer(
    reRenderer: React.Dispatch<React.SetStateAction<string>>
  ) {
    LvtFlow.uiReRenderer = reRenderer;
  }

  // =======================================
  // rerender
  // =======================================
  static reRenderId = "";
  static reRender() {
    const timeStamp = new Date().getTime().toString();
    // if (timeStamp !== LvtFlow.reRenderId) {
    //   LvtFlow.reRenderId = timeStamp;
    //   setTimeout(() => {
    //     LvtFlow.uiReRenderer?.(timeStamp);
    //   }, 0);
    // }
    LvtFlow.uiReRenderer?.(timeStamp);
  }
  reRenderUI(
    uiList: Array<"outputSource" | "currentElement" | "renderMap"> = []
  ) {
    for (let i = 0, l = uiList.length; i < l; i += 1) {
      switch (uiList[i]) {
        case "outputSource":
          this.outputSourceRenderSeed = Math.random();
          break;
        case "currentElement":
          this.currentElementRenderSeed = Math.random();
          break;
        case "renderMap":
          this.renderMapSeed = Math.random();
          break;
        default:
          break;
      }
    }
    LvtFlow.reRender();
  }

  // =======================================
  // clear
  // =======================================
  clearData() {
    this.data = [];
    this.currentElement = null;
    this.outputSource = null;
    this.renderData = null;
    this.dataVersion = 0;
    this.rendererId = undefined;
    this.updateprojectId();
    //
    this.reRenderUI(["renderMap", "outputSource", "currentElement"]);
  }

  // =======================================
  // export
  // =======================================
  exportData() {
    const exportData: IExportData = {
      nodes: [],
      edges: [],
    };
    for (let i = 0; i < this.data.length; i += 1) {
      const nodeData: any = {
        id: this.data[i].id,
        nodeId: this.data[i].nodeId,
      };

      // portsIn
      if (this.data[i].data.portsIn.length > 0) {
        // has ports in
        this.data[i].data.portsIn.forEach((port: any) => {
          if (!port.connected) {
            if (!nodeData.data) {
              nodeData.data = {
                portsIn: [],
              };
            }
            const portData: any = {
              name: port.name,
              value: port.value.v,
            };
            nodeData.data.portsIn.push(portData);
          }
          if (port.source) {
            exportData.edges.push({
              source: port.source.id,
              sourceHandle: port.source.portName,
              target: this.data[i].id,
              targetHandle: port.name,
            });
          }
        });
      }

      exportData.nodes.push(nodeData);
    }
    return exportData;
  }

  // =======================================
  // import
  // =======================================
  async importData(importData: IExportData) {
    this.clearData();

    //
    // setTimeout(() => {
    // add nodes
    const nodeIds: number[] = [];
    if (importData.nodes.length > 0) {
      importData.nodes.forEach((node) => {
        nodeIds.push(Number(node.id));
        this.addNode(node, false);
      });
    }

    // add edges
    if (importData.edges.length > 0) {
      importData.edges.forEach((edge) => {
        this.addEdge(edge, false);
      });
    }
    // set the id to prevent same id
    idCreator.setId(Math.max(...nodeIds) + 1);
    // init data
    this.dataVersion += 1;
    if (this.rendererId) {
      await this.updateNodesUntilNode(this.rendererId);
    } else {
      console.warn("no renderer node found");
    }
    for (let i = 0, n = this.data.length; i < n; i += 1) {
      if (!this.data[i].data?.portsOut?.[0]?.connected) {
        await this.updateNodesUntilNode(this.data[i].id as string);
      }
    }
  }
}

interface IExportData {
  nodes: Array<any>;
  edges: Array<any>;
}
