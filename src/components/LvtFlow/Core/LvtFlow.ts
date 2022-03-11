import React from "react";

import { LvtNode } from "./LvtNode";
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
  // current
  currentElement: LvtNode | null;
  // output
  outputSource: LvtPort | null;
  // render
  renderData: IRenderData | null;
  rendererId: string | undefined;

  // ui rerenderer for react
  static uiReRenderer: React.Dispatch<React.SetStateAction<number>> | undefined;

  // =======================================
  // constructor
  // =======================================
  constructor() {
    this.data = [];
    this.currentElement = null;
    this.outputSource = null;
    // expose to window
    (window as any).lvtFlow = this;
    //
    this.isValidConnection = this.isValidConnection.bind(this);
    this.renderData = null;
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
    LvtFlow.reRender();
  }

  // =======================================
  // nodes
  // =======================================
  addNode(nodeId: string) {
    const node = new LvtNode({ nodeId });
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

  chainUpdateNode(id: string) {
    const node = this.getNodeById(id);
    node.update?.(node);
    if (node.data.portsOut?.length > 0) {
      Array.from(node.data.portsOut).forEach((out: any) => {
        Array.from(out.targets).forEach((target: any) => {
          this.chainUpdateNode(target.id);
        });
      });
    }
    LvtFlow.reRender();
  }

  // =======================================
  // edges
  // =======================================
  isValidConnection(params: any) {
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
    this.chainUpdateNode(params.target);
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
      targetPort.cloneValue(sourcePort.value);
      // set render
      if (target.isRenderer && this.rendererId === target.id) {
        this.removeRenderer();
      }
      this.chainUpdateNode(params.target);
    }
  }

  // =======================================
  // renderer
  // =======================================
  setRenderer(node: LvtNode) {
    const rendererPort = node.data.portsOut.find((n) => n.isRenderSource);
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
  static reRender() {
    LvtFlow.uiReRenderer?.(new Date().getTime());
  }

  // =======================================
  // export
  // =======================================
  exportData() {
    const exportData = [];
    for (let i = 0; i < this.data.length; i += 1) {
      exportData.push({
        id: this.data[i].id,
        nodeId: this.data[i].nodeId,
      });
    }
    return exportData;
  }
}