import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const HorizontalOriginValue: LvtNodeDef = {
  _id: "HorizontalOriginValue",
  ui: {
    title: "HorizontalOriginValue",
    description: "The horizontal location of an origin relative to an object's position.",
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
              title: "LEFT",
              value: "LEFT"
            },{
              title: "CENTER",
              value: "CENTER"
            },{
              title: "RIGHT",
              value: "RIGHT"
            },
          ]
        },
        hidden: true,
      },
    },
  ],
  portsOut: [
    {
      name: "HorizontalOriginValue",
      dataType: "string",
    },
  ],
  rule: (v: any) => {
    return v;
  },
  update: (node: LvtNode) => {
    updateNode(node, "HorizontalOriginValue", ["value"]);
    return node;
  },
};

export default HorizontalOriginValue;