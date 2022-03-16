import {
  updateNode,
  packageSpreadCompositeValues,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Vector2: LvtNodeDef = {
  _id: "Vector2",
  ui: {
    title: "Vector2",
    description: "",
  },
  portsIn: [
    {
      name: "x",
      dataType: "numberSpread",
      ui: {
        component: "OutputSource",
      },
    },
    {
      name: "y",
      dataType: "numberSpread",
      ui: {
        component: "OutputSource",
      },
    },
  ],
  portsOut: [
    {
      name: "vector2Spread",
      dataType: "numberSpread",
      ui: {
        component: "OutputSource",
      },
    },
  ],
  rule: (x: any, y: any) => {
    return packageSpreadCompositeValues({ x, y }, "array");
  },
  update: (node: LvtNode) => {
    updateNode(node, "vector2Spread", ["x", "y"]);
    return node;
  },
};

export default Vector2;
