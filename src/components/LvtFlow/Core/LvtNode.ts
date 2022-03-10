import * as Nodes from "../Nodes";

import { createGUID } from "./CommFuc";
import { LvtPort, LvtPortDef, portType } from "./LvtPort";

interface LvtNodeOptions {
  nodeId: string;
}

export interface LvtNodeDef {
  _id: string;
  nodeId?: string;
  category?: string;
  isRenderer?: boolean;
  ui: {
    title: string;
    description?: string;
  };
  portsIn: Array<LvtPortDef>;
  portsOut: Array<LvtPortDef>;
  update?: any;
  rule?: any;
}

export class LvtNode {
  id: string;
  nodeId: string | undefined;
  category: string | undefined;
  ui: any;
  isRenderer?: boolean;
  data: {
    portsIn: Array<LvtPort>;
    portsOut: Array<LvtPort>;
  };
  update: any;
  rule: any;

  //
  static createPorts(portsDef: any, portType: portType, node: LvtNode) {
    const ports: Array<LvtPort> = [];
    portsDef.forEach((portDef: any) => {
      ports.push(new LvtPort({ ...portDef, portType, node }));
    });
    return ports;
  }

  constructor(options: LvtNodeOptions) {
    const nodeDef = Nodes.nodeDefs[options.nodeId];
    //
    this.id = createGUID();
    this.nodeId = nodeDef.nodeId;
    this.category = nodeDef.category;
    //
    this.ui = {
      nodeType: "basicNode",
      ...nodeDef.ui,
    };
    //
    this.update = nodeDef.update;
    this.rule = nodeDef.rule;
    this.data = {
      portsIn: LvtNode.createPorts(nodeDef.portsIn, "input", this),
      portsOut: LvtNode.createPorts(nodeDef.portsOut, "output", this),
    };
    this.isRenderer = nodeDef.isRenderer;
  }

  // =======================================
  // ports methods
  // =======================================
  getPortInByName(portName: string) {
    return this.data.portsIn.find((p) => p.name === portName);
  }
  getPortOutByName(portName: string) {
    return this.data.portsOut.find((p) => p.name === portName);
  }

  // =======================================
  // edges methods
  // =======================================
  getAllEdges() {
    const edges: any = [];
    this.data.portsIn?.forEach((port) => {
      if (port.source) {
        edges.push({
          source: port.source.id,
          sourceHandle: port.source.portName,
          target: this.id,
          targetHandle: port.name,
        });
      }
    });
    this.data.portsOut?.forEach((port) => {
      if (port.targets && port.targets.length > 0) {
        port.targets?.forEach((target) => {
          edges.push({
            source: this.id,
            sourceHandle: port.name,
            target: target.id,
            targetHandle: target.portName,
          });
        });
      }
    });
    return edges.length > 0 ? edges : null;
  }
}
