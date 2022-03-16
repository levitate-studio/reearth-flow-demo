import React from "react";

import { idCreator } from "./CommFuc";
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
  // action
  needUpdateData: boolean;
  // current
  currentElement: LvtNode | null;
  currentElementRenderSeed: number | undefined;
  // output
  outputSource: LvtPort | null;
  outputSourceRenderSeed: number | undefined;
  // render
  renderData: IRenderData | null;
  rendererId: string | undefined;

  // version
  version: string;

  // ui rerenderer for react
  static uiReRenderer: React.Dispatch<React.SetStateAction<number>> | undefined;

  // =======================================
  // constructor
  // =======================================
  constructor() {
    this.data = [];
    this.currentElement = null;
    this.outputSource = null;
    this.renderData = null;
    this.needUpdateData = true;
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
    this.needUpdateData = false;
    this.currentElementRenderSeed = Math.random();
    LvtFlow.reRender();
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
    this.outputSourceRenderSeed = Math.random();
    this.needUpdateData = false;
    LvtFlow.reRender();
  }

  // =======================================
  // nodes
  // =======================================
  addNode(options: LvtNodeOptions) {
    const node = new LvtNode(options);
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
          edges.forEach((edge: any) => {
            this.removeEdge(edge);
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

  async chainUpdateNode(id: string) {
    const node = this.getNodeById(id);
    await node.update?.(node);
    if (node.data.portsOut?.length > 0) {
      Array.from(node.data.portsOut).forEach((out: any) => {
        Array.from(out.targets).forEach((target: any) => {
          this.chainUpdateNode(target.id);
        });
      });
    }
  }

  updateNodesFromNode(id: string) {
    this.chainUpdateNode(id);
    setTimeout(() => {
      this.needUpdateData = true;
      LvtFlow.reRender();
    }, 0);
  }

  // =======================================
  // edges
  // =======================================
  isValidConnection(params: any) {
    return true;
    const sourcePort = this.getNodeById(params.source).getPortOutByName(
      params.sourceHandle
    );
    const targetPort = this.getNodeById(params.target).getPortInByName(
      params.targetHandle
    );
    let allowed: string[] = [];
    switch (sourcePort.dataType) {
      case "string":
        allowed = ["string", "stringArray", "stringSpread"];
        break;
      case "stringSpread":
        allowed = ["stringSpread"];
        break;
      case "stringArray":
        allowed = ["stringArray", "stringSpread", "array"];
        break;
      case "array":
        allowed = ["stringArray", "stringSpread", "array"];
        break;
      case "number":
        allowed = ["number", "numberArray", "numberSpread"];
        break;
      case "numberArray":
        allowed = ["numberArray", "numberSpread"];
        break;
      case "numberSpread":
        allowed = ["numberSpread"];
        break;
      case "object":
        allowed = ["object"];
        break;
      case "objectArray":
        allowed = ["objectArray"];
        break;
      default:
        break;
    }
    return allowed.includes(targetPort.dataType);
  }

  addEdge(params: IEdgeParams | any) {
    const source = this.getNodeById(params.source);
    const sourcePort = source.getPortOutByName(params.sourceHandle);
    const target = this.getNodeById(params.target);
    const targetPort = target.getPortInByName(params.targetHandle);
    // set target port source
    targetPort.setSource({
      id: params.source,
      portName: params.sourceHandle,
    });
    // set source port target
    sourcePort.addTarget({
      id: params.target,
      portName: params.targetHandle,
    });
    // set target value
    targetPort.setValueObj(sourcePort.value);
    // set render
    if (target.isRenderer) {
      this.setRenderer(target);
    }
    // update
    this.updateNodesFromNode(params.target);
  }

  removeEdge(params: IEdgeParams | any) {
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
      this.updateNodesFromNode(params.target);
    }
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
    reRenderer: React.Dispatch<React.SetStateAction<number>>
  ) {
    LvtFlow.uiReRenderer = reRenderer;
  }

  // =======================================
  // rerender
  // =======================================
  static reRenderId = "";
  static reRender() {
    const timeStamp = new Date().getTime().toString();
    if (timeStamp !== LvtFlow.reRenderId) {
      LvtFlow.reRenderId = timeStamp;
      setTimeout(() => {
        LvtFlow.uiReRenderer?.(new Date().getTime());
      }, 0);
    }
  }

  // =======================================
  // clear
  // =======================================
  clearData() {
    this.data = [];
    this.currentElement = null;
    this.outputSource = null;
    this.renderData = null;
    this.needUpdateData = true;
    LvtFlow.reRender();
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
  importData(importData: IExportData) {
    this.clearData();
    // add nodes
    const nodeIds: number[] = [];
    if (importData.nodes.length > 0) {
      importData.nodes.forEach((node) => {
        nodeIds.push(Number(node.id));
        this.addNode(node);
      });
    }

    // add edges
    if (importData.edges.length > 0) {
      importData.edges.forEach((edge) => {
        this.addEdge(edge);
      });
    }
    // set the id to prevent same id
    idCreator.setId(Math.max(...nodeIds) + 1);
  }
}

interface IExportData {
  nodes: Array<any>;
  edges: Array<any>;
}
