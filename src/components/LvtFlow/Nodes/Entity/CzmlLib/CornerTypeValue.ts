import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const CornerTypeValue: LvtNodeDef = {
  _id: "CornerTypeValue",
  ui: {
    title: "CornerTypeValue",
    description: "The style of a corner.",
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
              title: "ROUNDED",
              value: "ROUNDED"
            },{
              title: "MITERED",
              value: "MITERED"
            },{
              title: "BEVELED",
              value: "BEVELED"
            },
          ]
        },
        hidden: true,
      },
    },
  ],
  portsOut: [
    {
      name: "CornerTypeValue",
      dataType: "string",
    },
  ],
  rule: (v: any) => {
    return v;
  },
  update: (node: LvtNode) => {
    updateNode(node, "CornerTypeValue", ["value"]);
    return node;
  },
};

export default CornerTypeValue;