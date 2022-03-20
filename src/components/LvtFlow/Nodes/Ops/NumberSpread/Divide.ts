import { updateNode } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Divide: LvtNodeDef = {
  _id: "Divide",
  ui: {
    title: "/",
    description: "",
  },
  portsIn: [
    {
      name: "spread0",
      dataType: "number",
      defaultValue: 0,
    },
    {
      name: "spread1",
      dataType: "number",
      defaultValue: 0,
    },
  ],
  portsOut: [
    {
      name: "result",
      dataType: "numberSpread",
    },
  ],
  rule: (a: number, b: number) => {
    const _a = typeof a === "object" ? a : [a];
    const _b = typeof b === "object" ? b : [b];
    const max = Math.max(_a.length, _b.length);
    const result = [];
    for (let i = 0; i < max; i += 1) {
      result.push(Number(_a[i % _a.length]) / Number(_b[i % _b.length]));
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "result", ["spread0", "spread1"]);
    return node;
  },
};

export default Divide;
