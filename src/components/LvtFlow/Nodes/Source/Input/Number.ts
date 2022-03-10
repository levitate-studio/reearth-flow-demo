import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const NodeDef: LvtNodeDef = {
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
    const input = node.getPortInByName("input")?.getValue();
    node.getPortOutByName("result")?.setValue(node.rule(input));
  },
};

export default NodeDef;
