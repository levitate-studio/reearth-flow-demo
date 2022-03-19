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
      ui: {
        component: "BooleanRadio",
        hidden: true,
      },
      defaultValue: true,
    },
  ],
  portsOut: [
    {
      name: "result",
      dataType: "boolean",
      defaultValue: true,
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
