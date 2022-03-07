import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Add: LvtNodeDef = {
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
  update: (node: LvtNode) => {
    const n0 = node.getPortsInValueByName("number0");
    const n1 = node.getPortsInValueByName("number1");
    node.setPortsOutValueByName("result", n0 + n1);
  },
};

export default Add;
