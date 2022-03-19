import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const ClockRange: LvtNodeDef = {
  _id: "ClockRange",
  ui: {
    title: "ClockRange",
    description: "The behavior of a clock when its current time reaches its start or end time.",
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
              title: "UNBOUNDED",
              value: "UNBOUNDED"
            },{
              title: "CLAMPED",
              value: "CLAMPED"
            },{
              title: "LOOP_STOP",
              value: "LOOP_STOP"
            },
          ]
        },
        hidden: true,
      },
    },
  ],
  portsOut: [
    {
      name: "ClockRange",
      dataType: "string",
    },
  ],
  rule: (v: any) => {
    return v;
  },
  update: (node: LvtNode) => {
    updateNode(node, "ClockRange", ["value"]);
    return node;
  },
};

export default ClockRange;