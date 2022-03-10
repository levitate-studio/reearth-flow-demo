import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Vector2Spread: LvtNodeDef = {
  _id: "Vector2Spread",
  ui: {
    title: "Vector2 Spread",
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
  rule: (a: number[] | number, b: number[] | number) => {
    const _a = typeof a === "object" ? a : [a];
    const _b = typeof b === "object" ? b : [b];
    const max = Math.max(_a.length, _b.length);
    const result = [];
    for (let i = 0; i < max; i += 1) {
      result.push([_a[i % _a.length], _b[i % _b.length]]);
    }
    return result;
  },
  update: (node: LvtNode) => {
    const x = node.getPortInByName("x")?.getValue();
    const y = node.getPortInByName("y")?.getValue();
    node.getPortOutByName("vector2Spread")?.setValue(node.rule(x, y));
    return node;
  },
};

export default Vector2Spread;
