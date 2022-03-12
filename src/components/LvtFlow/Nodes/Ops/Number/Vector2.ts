import { updateNode } from "../../../Core/CommFuc";
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
      dataType: "number",
    },
    {
      name: "y",
      dataType: "number",
    },
  ],
  portsOut: [
    {
      name: "vector2",
      dataType: "numberArray",
      ui: {
        component: "OutputSource",
      },
    },
  ],
  rule: (a: number, b: number) => {
    return [a, b];
  },
  update: (node: LvtNode) => {
    updateNode(node, "vector2", ["x", "y"]);
    return node;
  },
};

export default Vector2;
