import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const HeightReferenceValue: LvtNodeDef = {
  _id: "HeightReferenceValue",
  ui: {
    title: "HeightReferenceValue",
    description: "The height reference of an object, which indicates if the object's position is relative to terrain or not.",
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
              title: "CLAMP_TO_GROUND",
              value: "CLAMP_TO_GROUND"
            },{
              title: "RELATIVE_TO_GROUND",
              value: "RELATIVE_TO_GROUND"
            },
          ]
        },
        hidden: true,
      },
    },
  ],
  portsOut: [
    {
      name: "HeightReferenceValue",
      dataType: "string",
    },
  ],
  rule: (v: any) => {
    return v;
  },
  update: (node: LvtNode) => {
    updateNode(node, "HeightReferenceValue", ["value"]);
    return node;
  },
};

export default HeightReferenceValue;