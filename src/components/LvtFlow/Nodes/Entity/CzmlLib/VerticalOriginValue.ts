import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const VerticalOriginValue: LvtNodeDef = {
  _id: "VerticalOriginValue",
  ui: {
    title: "VerticalOriginValue",
    description: "The vertical location of an origin relative to an object's position.",
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
              title: "BASELINE",
              value: "BASELINE"
            },{
              title: "BOTTOM",
              value: "BOTTOM"
            },{
              title: "CENTER",
              value: "CENTER"
            },{
              title: "TOP",
              value: "TOP"
            },
          ]
        },
        hidden: true,
      },
    },
  ],
  portsOut: [
    {
      name: "VerticalOriginValue",
      dataType: "string",
    },
  ],
  rule: (v: any) => {
    return v;
  },
  update: (node: LvtNode) => {
    updateNode(node, "VerticalOriginValue", ["value"]);
    return node;
  },
};

export default VerticalOriginValue;