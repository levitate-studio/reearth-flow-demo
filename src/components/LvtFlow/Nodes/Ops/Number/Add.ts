import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Add: LvtNodeDef = {
  _id: "Add",
  ui: {
    title: "Add",
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
    const n0 = node.getPortInByName("number0")?.getValue();
    const n1 = node.getPortInByName("number1")?.getValue();
    node.getPortOutByName("result")?.setValue(node.rule(n0, n1));
    return node;
  },
};

export default Add;
