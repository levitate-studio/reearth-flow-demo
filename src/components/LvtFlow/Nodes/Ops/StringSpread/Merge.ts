import { updateNode } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Merge: LvtNodeDef = {
  _id: "Merge",
  ui: {
    title: "Merge",
    description:
      "merge two stringSpread into one. merge([x1,x2],[y1,y2,y3]) => [x1,x2,y1,y2,y3]",
  },
  portsIn: [
    {
      name: "input0",
      dataType: "string",
      defaultValue: [],
    },
    {
      name: "input1",
      dataType: "string",
      defaultValue: [],
    },
  ],
  portsOut: [
    {
      name: "merged",
      dataType: "stringSpread",
    },
  ],
  rule: (a: any, b: any) => {
    const _a = typeof a === "object" ? a : [a];
    const _b = typeof b === "object" ? b : [b];
    return [..._a, ..._b];
  },
  update: (node: LvtNode) => {
    updateNode(node, "merged", ["input0", "input1"]);
    return node;
  },
};

export default Merge;
