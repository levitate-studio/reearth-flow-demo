import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Clock: LvtNodeDef = {
  _id: "Clock",
  ui: {
    title: "Clock",
    description: "Initial settings for a simulated clock when a document is loaded. The start and stop time are configured using the interval property.",
  },
  portsIn: [
    {
      name: "currentTime",
      dataType: "Time",
      ui:{
        description: "The current time, specified in ISO8601 format."
      },
    },{
      name: "range",
      dataType: "ClockRange",
      ui:{
        description: "The behavior when the current time reaches its start or end times."
      },
    },{
      name: "step",
      dataType: "ClockStep",
      ui:{
        description: "How the current time advances each tick."
      },
    },
  ],
  portsOut: [
    {
      name: "Clock",
      dataType: "Clock",
    },
  ],
  rule: (_currentTime: any, _range: any, _step: any) => {
    return packageSpreadValue(
      { _currentTime, _range, _step }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "Clock", ["currentTime", "range", "step"]);
    return node;
  },
};

export default Clock;