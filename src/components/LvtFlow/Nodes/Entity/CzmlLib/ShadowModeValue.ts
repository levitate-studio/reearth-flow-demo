import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const ShadowModeValue: LvtNodeDef = {
  _id: "ShadowModeValue",
  ui: {
    title: "ShadowModeValue",
    description: "Whether or not an object casts or receives shadows from each light source when shadows are enabled.",
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
              title: "DISABLED",
              value: "DISABLED"
            },{
              title: "ENABLED",
              value: "ENABLED"
            },{
              title: "CAST_ONLY",
              value: "CAST_ONLY"
            },{
              title: "RECEIVE_ONLY",
              value: "RECEIVE_ONLY"
            },
          ]
        },
        hidden: true,
      },
    },
  ],
  portsOut: [
    {
      name: "ShadowModeValue",
      dataType: "string",
    },
  ],
  rule: (v: any) => {
    return v;
  },
  update: (node: LvtNode) => {
    updateNode(node, "ShadowModeValue", ["value"]);
    return node;
  },
};

export default ShadowModeValue;