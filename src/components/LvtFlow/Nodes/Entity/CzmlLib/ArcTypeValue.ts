import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const ArcTypeValue: LvtNodeDef = {
  _id: "ArcTypeValue",
  ui: {
    title: "ArcTypeValue",
    description: "The type of an arc.",
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
              title: "NONE",
              value: "NONE"
            },{
              title: "GEODESIC",
              value: "GEODESIC"
            },{
              title: "RHUMB",
              value: "RHUMB"
            },
          ]
        },
        hidden: true,
      },
    },
  ],
  portsOut: [
    {
      name: "ArcTypeValue",
      dataType: "string",
    },
  ],
  rule: (v: any) => {
    return v;
  },
  update: (node: LvtNode) => {
    updateNode(node, "ArcTypeValue", ["value"]);
    return node;
  },
};

export default ArcTypeValue;