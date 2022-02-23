import * as AssistFns from "../Common/AssistFns";
import * as Nodes from "../Nodes";

class DataManager {
  // properties
  nodeDefs: any;
  data: any;
  nodeTypes: any;
  //
  currentElement: any;
  //
  reRenderer: any;

  // constuctor
  constructor() {
    this.nodeDefs = Nodes.nodeDefs;
    this.data = [];
    this.nodeTypes = Nodes.types;
    this.currentElement = null;
    this.reRenderer = null;
  }

  // =======================================
  // statics
  // =======================================
  static getPortInitComponent(type: string, component: string) {
    if (component) {
      return component;
    }
    switch (type) {
      case "number":
        return "numberInput";
      case "string":
      default:
        return "input";
    }
  }
  static getPortInitValue(type: string, defaultValue: any) {
    if (defaultValue) {
      return defaultValue;
    }
    switch (type) {
      case "number":
      default:
        return 0;
      case "string":
        return "";
    }
  }

  static createPorts(portsDef: any, portsType: string) {
    const ports: any = [];
    portsDef.forEach((portDef: any) => {
      const newPort: any = {
        name: portDef.name,
        type: portDef.type,
        des: portDef.des,
        component: DataManager.getPortInitComponent(
          portDef.type,
          portDef.component
        ),
        value: {
          v: DataManager.getPortInitValue(portDef.type, portDef.defaultValue),
        },
        isConnected: false,
        defaultValue: portDef.defaultValue,
      };
      portsType === "in" ? (newPort.sources = []) : (newPort.targets = []);
      ports.push(newPort);
    });
    return ports;
  }

  static getElement(data: any, id: string) {
    return data.find((ele: any) => ele.id === id);
  }

  static getPortIn(ele: any, portName: string) {
    return ele.data.portsIn.find((port: any) => port.name === portName);
  }
  static getPortOut(ele: any, portName: string) {
    return ele.data.portsOut.find((port: any) => port.name === portName);
  }

  // methods
  // =======================================
  // add node
  // =======================================
  addNode(nodeId: string) {
    const nodeDef = this.nodeDefs.find(
      (node: any) => node.public.nodeId === nodeId
    );
    if (nodeDef) {
      const id = AssistFns.getGUID();
      const nodeType = "basicNode";
      const portsIn = DataManager.createPorts(nodeDef.portsIn, "in");
      const portsOut = DataManager.createPorts(nodeDef.portsOut, "out");
      this.data.push({
        id,
        nodeType,
        public: nodeDef.public,
        update: nodeDef.update,
        data: {
          portsIn,
          portsOut,
        },
      });
      return {
        id,
        nodeType,
        nodeDef,
      };
    }
    return false;
  }

  // =======================================
  // remove node
  // =======================================
  removeNode(nodeId: any) {
    this.data.forEach((ele: any, index: number, arr: any) => {
      if (ele.id === nodeId) {
        // remove sources
        ele.data.portsIn.forEach((port: any) => {
          port.sources.forEach((source: any) => {
            const sourceEle = DataManager.getElement(
              this.data,
              source.elementId
            );
            const sourcePort = DataManager.getPortOut(
              sourceEle,
              source.portName
            );
            sourcePort.targets.forEach(
              (target: any, index: number, arr: any) => {
                if (target.elementId === nodeId) {
                  arr.splice(index, 1);
                }
              }
            );
          });
        });
        // remove targets
        ele.data.portsOut.forEach((port: any) => {
          port.targets.forEach((target: any) => {
            const targetEle = DataManager.getElement(
              this.data,
              target.elementId
            );
            const targetPort = DataManager.getPortIn(
              targetEle,
              target.portName
            );
            targetPort.sources.forEach(
              (source: any, index: number, arr: any) => {
                if (source.elementId === nodeId) {
                  arr.splice(index, 1);
                }
              }
            );
            targetPort.isConnected = false;
            targetPort.value = {
              v: DataManager.getPortInitValue(
                targetPort.type,
                targetPort.defaultValue
              ),
            };
          });
        });
        // remove node data
        arr.splice(index, 1);
      }
    });
  }

  // =======================================
  // add edge
  // =======================================
  addEdge(params: any) {
    const source = DataManager.getElement(this.data, params.source);
    const target = DataManager.getElement(this.data, params.target);
    const sourcePort = DataManager.getPortOut(source, params.sourceHandle);
    const targetPort = DataManager.getPortIn(target, params.targetHandle);
    // update connections
    targetPort.sources = [
      {
        elementId: params.source,
        portName: params.sourceHandle,
      },
    ];
    sourcePort.targets.push({
      elementId: params.target,
      portName: params.targetHandle,
    });
    // update value
    targetPort.value = sourcePort.value;
    targetPort.isConnected = true;
    this.updateNode(target.id);
  }

  // =======================================
  // remove edge
  // =======================================
  removeEdge(params: any) {
    const source = DataManager.getElement(this.data, params.source);
    const target = DataManager.getElement(this.data, params.target);
    const sourcePort = DataManager.getPortOut(source, params.sourceHandle);
    const targetPort = DataManager.getPortIn(target, params.targetHandle);
    // remove source connect
    sourcePort.targets.forEach((target: any, index: number, arr: any) => {
      if (target.elementId === params.target) {
        arr.splice(index, 1);
      }
    });
    // remove target connect
    targetPort.sources.forEach((source: any, index: number, arr: any) => {
      if (source.elementId === params.source) {
        arr.splice(index, 1);
      }
    });
    targetPort.isConnected = false;
    targetPort.value = {
      v: DataManager.getPortInitValue(targetPort.type, targetPort.defaultValue),
    };
    this.updateNode(target.id);
  }

  // =======================================
  // set current element
  // =======================================
  setCurrentElement(nodeId: string) {
    if (nodeId) {
      this.currentElement = this.data.find((ele: any) => ele.id === nodeId);
    } else {
      this.currentElement = null;
    }
    this.reRender();
  }

  // =======================================
  // update children nodes
  // =======================================
  // updateChildren(nodeId: string) {
  //   const ele = DataManager.getElement(this.data, nodeId);
  //   if (ele.data.portsOut?.length > 0) {
  //     Array.from(ele.data.portsOut).forEach((out: any) => {
  //       Array.from(out.targets).forEach((target: any) => {
  //         const targetEle = DataManager.getElement(this.data, target.elementId);
  //         targetEle.update?.(targetEle.data);
  //         this.updateChildren(target.elementId);
  //       });
  //     });
  //   }
  // }

  updateNode(nodeId: string) {
    const ele = DataManager.getElement(this.data, nodeId);
    ele.update?.(ele.data);
    if (ele.data.portsOut?.length > 0) {
      Array.from(ele.data.portsOut).forEach((out: any) => {
        Array.from(out.targets).forEach((target: any) => {
          this.updateNode(target.elementId);
        });
      });
    }
    // this.reRender();
  }

  // =======================================
  // re-render
  // =======================================
  reRender() {
    if (this.reRenderer) {
      this.reRenderer(new Date().getTime());
      console.log("triggered rerender");
    }
  }
}

export default DataManager;
