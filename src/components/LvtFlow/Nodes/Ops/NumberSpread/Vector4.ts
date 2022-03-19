import {
  updateNode,
  packageSpreadCompositeValues,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Vector4: LvtNodeDef = {
  _id: "Vector4",
  ui: {
    title: "Vector4",
    description: "",
  },
  portsIn: [
    {
      name: "r",
      dataType: "number",
      defaultValue: 0,
    },
    {
      name: "g",
      dataType: "number",
      defaultValue: 0,
    },
    {
      name: "b",
      dataType: "number",
      defaultValue: 0,
    },
    {
      name: "a",
      dataType: "number",
      defaultValue: 0,
    },
  ],
  portsOut: [
    {
      name: "Vector4Spread",
      dataType: "numberSpread",
    },
  ],
  rule: (r: any, g: any, b: any, a: any) => {
    return packageSpreadCompositeValues({ r, g, b, a }, "array");
  },
  update: (node: LvtNode) => {
    updateNode(node, "Vector4Spread", ["r", "g", "b", "a"]);
    return node;
  },
};

export default Vector4;
