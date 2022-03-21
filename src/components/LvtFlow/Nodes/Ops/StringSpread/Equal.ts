import { updateNode } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Equal: LvtNodeDef = {
  _id: "Equal",
  ui: {
    title: "Equal",
    description: "",
  },
  portsIn: [
    {
      name: "input0",
      dataType: "string",
    },
    {
      name: "input1",
      dataType: "string",
    },
  ],
  portsOut: [
    {
      name: "result",
      dataType: "booleanSpread",
    },
  ],
  rule: (a: any, b: any) => {
    const _a = typeof a === "object" ? a : [a];
    const _b = typeof b === "object" ? b : [b];
    const max = Math.max(_a.length, _b.length);
    const result = [];
    for (let i = 0; i < max; i += 1) {
      result.push(
        String(_a[i % _a.length]).trim() === String(_b[i % _b.length]).trim()
      );
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "result", ["input0", "input1"]);
    return node;
  },
};

export default Equal;
