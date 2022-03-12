import { updateNode } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Plus: LvtNodeDef = {
  _id: "Plus",
  ui: {
    title: "Plus",
    description: "",
  },
  portsIn: [
    {
      name: "number0",
      dataType: "number",
    },
    {
      name: "number1",
      dataType: "number",
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
  rule: (a: number, b: number) => {
    return a + b;
  },
  update: (node: LvtNode) => {
    updateNode(node, "result", ["number0", "number1"]);
    return node;
  },
};

export default Plus;
