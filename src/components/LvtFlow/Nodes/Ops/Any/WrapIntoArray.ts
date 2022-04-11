import { updateNode } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const WrapIntoArray: LvtNodeDef = {
  _id: "WrapIntoArray",
  ui: {
    title: "WrapIntoArray",
    description: "Wrap element into a array",
  },
  portsIn: [
    {
      name: "element",
      dataType: "any",
    },
  ],
  portsOut: [
    {
      name: "result",
      dataType: "any",
    },
  ],
  rule: (s: any) => {
    return [s];
  },
  update: (node: LvtNode) => {
    updateNode(node, "result", ["element"]);
    return node;
  },
};

export default WrapIntoArray;
