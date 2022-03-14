import {
  updateNode,
  packageSpreadCompositeValues,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Vector3Spread: LvtNodeDef = {
  _id: "Vector3Spread",
  ui: {
    title: "Vector3Spread",
    description: "",
  },
  portsIn: [
    {
      name: "x",
      dataType: "numberSpread",
      defaultValue: 0,
    },
    {
      name: "y",
      dataType: "numberSpread",
      defaultValue: 0,
    },
    {
      name: "z",
      dataType: "numberSpread",
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

export default Vector3Spread;
