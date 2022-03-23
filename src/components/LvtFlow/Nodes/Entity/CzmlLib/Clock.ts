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
      name: "interval",
      dataType: "Time",
      ui:{
        description: "The interval of the clock, specified in ISO8601 format."
      },
    },{
      name: "currentTime",
      dataType: "Time",
      ui:{
        description: "The current time, specified in ISO8601 format."
      },
    },{
      name: "multiplier",
      dataType: "number",
      ui:{
        description: "The multiplier. When `step` is set to `TICK_DEPENDENT`, this is the number of seconds to advance each tick. When `step` is set to `SYSTEM_CLOCK_DEPENDENT`, this is multiplied by the elapsed system time between ticks. This value is ignored in `SYSTEM_CLOCK` mode."
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
  rule: (_interval: any, _currentTime: any, _multiplier: any, _range: any, _step: any) => {
    return packageSpreadValue(
      { _interval, _currentTime, _multiplier, _range, _step }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "Clock", ["interval", "currentTime", "multiplier", "range", "step"]);
    return node;
  },
};

export default Clock;