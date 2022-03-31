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
    const _a = Array.isArray(a) ? a : [a];
    const _b = Array.isArray(b) ? b : [b];
    const max = Math.max(_a.length, _b.length);
    const result: any[] = [];
    if (typeof _a[0] !== "object" && typeof _b[0] !== "object") {
      for (let i = 0; i < max; i += 1) {
        result.push(Number(_a[i % _a.length]) / Number(_b[i % _b.length]));
      }
      return result;
    } else if (
      Array.isArray(_a[0]) &&
      Array.isArray(_b[0]) &&
      _a[0].length === _b[0].length
    ) {
      for (let i = 0; i < max; i += 1) {
        const row = [];
        for (let j = 0, jmax = _a[0].length; j < jmax; j += 1) {
          row.push(Number(_a[i % _a.length][j]) / Number(_b[i % _b.length][j]));
        }
        result.push(row);
      }
      return result;
    }
    return NaN;
  },
  update: (node: LvtNode) => {
    updateNode(node, "result", ["spread0", "spread1"]);
    return node;
  },
};

export default Divide;
