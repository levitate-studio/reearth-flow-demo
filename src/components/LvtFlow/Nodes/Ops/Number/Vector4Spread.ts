import {
  updateNode,
  packageSpreadCompositeValues,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Vector4Spread: LvtNodeDef = {
  _id: "Vector4Spread",
  ui: {
    title: "Vector4Spread",
    description: "",
  },
  portsIn: [
    {
      name: "r",
      dataType: "numberSpread",
      defaultValue: 0,
    },
    {
      name: "g",
      dataType: "numberSpread",
      defaultValue: 0,
    },
    {
      name: "b",
      dataType: "numberSpread",
      defaultValue: 0,
    },
    {
      name: "a",
      dataType: "numberSpread",
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

export default Vector4Spread;
