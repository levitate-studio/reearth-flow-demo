import { updateNode } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Ring: LvtNodeDef = {
  _id: "Ring",
  ui: {
    title: "Ring",
    description:
      "Append the first element at the end of the array and make it a ring.",
  },
  portsIn: [
    {
      name: "number",
      dataType: "number",
    },
  ],
  portsOut: [
    {
      name: "result",
      dataType: "numberSpread",
    },
  ],
  rule: (s: any) => {
    if (Array.isArray(s)) {
      return [...s, s[0]];
    }
    return [];
  },
  update: (node: LvtNode) => {
    updateNode(node, "result", ["number"]);
    return node;
  },
};

export default Ring;
