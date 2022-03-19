import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const LabelStyleValue: LvtNodeDef = {
  _id: "LabelStyleValue",
  ui: {
    title: "LabelStyleValue",
    description: "The style of a label.",
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
              title: "FILL",
              value: "FILL"
            },{
              title: "OUTLINE",
              value: "OUTLINE"
            },{
              title: "FILL_AND_OUTLINE",
              value: "FILL_AND_OUTLINE"
            },
          ]
        },
        hidden: true,
      },
    },
  ],
  portsOut: [
    {
      name: "LabelStyleValue",
      dataType: "string",
    },
  ],
  rule: (v: any) => {
    return v;
  },
  update: (node: LvtNode) => {
    updateNode(node, "LabelStyleValue", ["value"]);
    return node;
  },
};

export default LabelStyleValue;