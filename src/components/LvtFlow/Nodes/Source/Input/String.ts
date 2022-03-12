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
    const input = node.getPortInByName("input")?.getValue();
    node.getPortOutByName("result")?.setValue(node.rule(input));
  },
};

export default String;
