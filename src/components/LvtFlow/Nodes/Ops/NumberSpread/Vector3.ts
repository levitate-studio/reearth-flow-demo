import {
  updateNode,
  packageSpreadCompositeValues,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Vector3: LvtNodeDef = {
  _id: "Vector3",
  ui: {
    title: "Vector3",
    description: "",
  },
  portsIn: [
    {
      name: "x",
      dataType: "number",
      defaultValue: 0,
    },
    {
      name: "y",
      dataType: "number",
      defaultValue: 0,
    },
    {
      name: "z",
      dataType: "number",
      defaultValue: 0,
    },
  ],
  portsOut: [
    {
      name: "vector3Spread",
      dataType: "numberSpread",
    },
  ],
  rule: (x: any, y: any, z: any) => {
    return packageSpreadCompositeValues({ x, y, z }, "array");
  },
  update: (node: LvtNode) => {
    updateNode(node, "vector3Spread", ["x", "y", "z"]);
    return node;
  },
};

export default Vector3;
