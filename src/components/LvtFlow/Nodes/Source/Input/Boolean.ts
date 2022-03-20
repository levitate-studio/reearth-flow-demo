import { updateNode } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Boolean: LvtNodeDef = {
  _id: "Boolean",
  ui: {
    title: "Boolean",
    description: "",
  },
  portsIn: [
    {
      name: "input",
      dataType: "boolean",
      defaultValue: true,
      ui: {
        hidden: true,
      },
    },
  ],
  portsOut: [
    {
      name: "result",
      dataType: "booleanSpread",
    },
  ],
  rule: (a: boolean) => {
    return a;
  },
  update: (node: LvtNode) => {
    updateNode(node, "result", ["input"]);
    return node;
  },
};

export default Boolean;
