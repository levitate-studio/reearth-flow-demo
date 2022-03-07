import * as Nodes from "../Nodes";

import { createGUID } from "./CommFuc";
import { LvtPort, LvtPortDef } from "./LvtPort";

type LvtNodeOptions = {
  nodeId: string;
};

export type LvtNodeDef = {
  ui: {
    title: string;
    description?: string;
  };
  portsIn: Array<LvtPortDef>;
  portsOut: Array<LvtPortDef>;
  update: any;
};

export class LvtNode {
  id: string;
  ui: any;
  data: {
    portsIn: Array<LvtPort>;
    portsOut: Array<LvtPort>;
  };
  update: any;

  //
  static createPorts(portsDef: any, portType: string) {
    const ports: Array<LvtPort> = [];
    portsDef.forEach((portDef: any) => {
      ports.push(new LvtPort({ ...portDef, portType }));
    });
    return ports;
  }

  constructor(options: LvtNodeOptions) {
    const nodeDef = Nodes.nodeDefs[options.nodeId];
    //
    this.id = createGUID();
    //
    this.ui = {
      nodeType: "basicNode",
      ...nodeDef.ui,
    };
    //
    this.data = {
      portsIn: LvtNode.createPorts(nodeDef.portsIn, "in"),
      portsOut: LvtNode.createPorts(nodeDef.portsOut, "out"),
    };
    //
    this.update = nodeDef.update;
  }

  getPortsInValueByName(portName: string) {
    return this.data.portsIn.find((p) => p.name === portName)?.value;
  }
  getPortsOutValueByName(portName: string) {
    return this.data.portsOut.find((p) => p.name === portName)?.value;
  }
  setPortsOutValueByName(portName: string, value: any) {
    const port = this.data.portsOut.find((p) => p.name === portName);
    if (!port) return false;
    port.value = value;
  }
}
