import { updateNode } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Number: LvtNodeDef = {
  _id: "Number",
  ui: {
    title: "Number",
    description: "",
  },
  portsIn: [
    {
      name: "input",
      dataType: "number",
      ui: {
        component: "NumberInput",
        hidden: true,
      },
    },
  ],
  portsOut: [
    {
      name: "result",
      dataType: "number",
      ui: {
        component: "PureDisplay",
      },
    },
  ],
  rule: (a: number) => {
    return a;
  },
  update: (node: LvtNode) => {
    updateNode(node, "result", ["input"]);
    return node;
  },
};

export default Number;
