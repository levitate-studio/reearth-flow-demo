import { updateNode } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const String: LvtNodeDef = {
  _id: "String",
  ui: {
    title: "String",
    description: "",
  },
  portsIn: [
    {
      name: "input",
      dataType: "string",
      ui: {
        hidden: true,
      },
    },
  ],
  portsOut: [
    {
      name: "result",
      dataType: "string",
      ui: {
        component: "PureDisplay",
      },
    },
  ],
  rule: (a: string) => {
    return a;
  },
  update: (node: LvtNode) => {
    updateNode(node, "result", ["input"]);
    return node;
  },
};

export default String;
