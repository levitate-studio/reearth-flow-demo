import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const ClassificationTypeValue: LvtNodeDef = {
  _id: "ClassificationTypeValue",
  ui: {
    title: "ClassificationTypeValue",
    description: "Whether a classification affects terrain, 3D Tiles, or both.",
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
              title: "TERRAIN",
              value: "TERRAIN"
            },{
              title: "CESIUM_3D_TILE",
              value: "CESIUM_3D_TILE"
            },{
              title: "BOTH",
              value: "BOTH"
            },
          ]
        },
        hidden: true,
      },
    },
  ],
  portsOut: [
    {
      name: "ClassificationTypeValue",
      dataType: "string",
    },
  ],
  rule: (v: any) => {
    return v;
  },
  update: (node: LvtNode) => {
    updateNode(node, "ClassificationTypeValue", ["value"]);
    return node;
  },
};

export default ClassificationTypeValue;