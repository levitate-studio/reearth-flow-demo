import { updateNode } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Min: LvtNodeDef = {
  _id: "Min",
  ui: {
    title: "Min",
    description: "",
  },
  portsIn: [
    {
      name: "numberArray",
      dataType: "numberArray",
      defaultValue: [0],
    },
  ],
  portsOut: [
    {
      name: "minValue",
      dataType: "number",
    },
  ],
  rule: (a: any) => {
    const _a = typeof a === "object" ? a : [a];
    const result = Math.min(..._a);
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "minValue", ["numberArray"]);
    return node;
  },
};

export default Min;
