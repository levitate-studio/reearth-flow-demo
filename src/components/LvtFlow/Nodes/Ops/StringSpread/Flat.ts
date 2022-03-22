import { updateNode } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Flat: LvtNodeDef = {
  _id: "Flat",
  ui: {
    title: "Flat",
    description: "",
  },
  portsIn: [
    {
      name: "spread",
      dataType: "stringSpread",
      defaultValue: 0,
    },
  ],
  portsOut: [
    {
      name: "result",
      dataType: "stringSpread",
    },
  ],
  rule: (a: any) => {
    const _a = typeof a === "object" ? a : [a];
    const result = [_a.flat(Infinity)];
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "result", ["spread"]);
    return node;
  },
};

export default Flat;
