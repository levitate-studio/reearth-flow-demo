import { updateNode } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const FlatSpread: LvtNodeDef = {
  _id: "FlatSpread",
  ui: {
    title: "FlatSpread",
    description: "",
  },
  portsIn: [
    {
      name: "spread",
      dataType: "numberSpread",
      defaultValue: 0,
    },
  ],
  portsOut: [
    {
      name: "result",
      dataType: "numberSpread",
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

export default FlatSpread;
