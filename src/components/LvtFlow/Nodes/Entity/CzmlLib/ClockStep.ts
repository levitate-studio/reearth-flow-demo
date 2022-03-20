import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const ClockStep: LvtNodeDef = {
  _id: "ClockStep",
  ui: {
    title: "ClockStep",
    description: "Defines how a clock advances each tick.",
  },
  portsIn: [
    {
      name: "value",
      dataType: "string",
      ui: {
        component: "Select",
        componentOptions: {
          selectorSourceType: "self",
          selectorOptions: [
            {
              title: "",
              value: undefined,
            },
            {
              title: "TICK_DEPENDENT",
              value: "TICK_DEPENDENT"
            },{
              title: "SYSTEM_CLOCK_MULTIPLIER",
              value: "SYSTEM_CLOCK_MULTIPLIER"
            },{
              title: "SYSTEM_CLOCK",
              value: "SYSTEM_CLOCK"
            },
          ]
        },
        hidden: true,
      },
    },
  ],
  portsOut: [
    {
      name: "ClockStep",
      dataType: "string",
    },
  ],
  rule: (v: any) => {
    return v;
  },
  update: (node: LvtNode) => {
    updateNode(node, "ClockStep", ["value"]);
    return node;
  },
};

export default ClockStep;