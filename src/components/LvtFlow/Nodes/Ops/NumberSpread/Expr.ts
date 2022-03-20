import { updateNode } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Expr: LvtNodeDef = {
  _id: "Expr",
  ui: {
    title: "Expr",
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
      name: "expression",
      dataType: "string",
    },
  ],
  portsOut: [
    {
      name: "result",
      dataType: "numberSpread",
    },
  ],
  rule: (x: any, y: any, expression: string) => {
    const result = [];
    if (expression && x !== undefined && y !== undefined) {
      const _x = typeof x === "object" ? x : [x];
      const _y = typeof y === "object" ? y : [y];
      const max = Math.max(_x.length, _y.length);
      const calc = new Function("x", "y", `return ${expression}`);

      try {
        for (let i = 0; i < max; i += 1) {
          result.push(calc(_x[i % _x.length], _y[i % _y.length]));
        }
      } catch (e) {
        console.warn(e);
      }
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "result", ["x", "y", "expression"]);
    return node;
  },
};

export default Expr;
