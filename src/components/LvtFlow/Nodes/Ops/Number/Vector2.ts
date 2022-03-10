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
    const x = node.getPortInByName("x")?.getValue();
    const y = node.getPortInByName("y")?.getValue();
    node.getPortOutByName("vector2")?.setValue(node.rule(x, y));
    return node;
  },
};

export default Vector2;
