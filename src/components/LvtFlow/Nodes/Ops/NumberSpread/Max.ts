import { updateNode } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Max: LvtNodeDef = {
  _id: "Max",
  ui: {
    title: "Max",
    description: "",
  },
  portsIn: [
    {
      name: "numberSpread",
      dataType: "numberSpread",
      defaultValue: [0],
    },
  ],
  portsOut: [
    {
      name: "maxValue",
      dataType: "number",
    },
  ],
  rule: (a: any) => {
    const _a = typeof a === "object" ? a : [a];
    const result = Math.max(..._a);
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "maxValue", ["numberSpread"]);
    return node;
  },
};

export default Max;
