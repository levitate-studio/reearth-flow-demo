import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const ColorBlendModeValue: LvtNodeDef = {
  _id: "ColorBlendModeValue",
  ui: {
    title: "ColorBlendModeValue",
    description: "The mode of blending between a target color and an entity's source color.",
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
              title: "HIGHLIGHT",
              value: "HIGHLIGHT"
            },{
              title: "REPLACE",
              value: "REPLACE"
            },{
              title: "MIX",
              value: "MIX"
            },
          ]
        },
        hidden: true,
      },
    },
  ],
  portsOut: [
    {
      name: "ColorBlendModeValue",
      dataType: "string",
    },
  ],
  rule: (v: any) => {
    return v;
  },
  update: (node: LvtNode) => {
    updateNode(node, "ColorBlendModeValue", ["value"]);
    return node;
  },
};

export default ColorBlendModeValue;