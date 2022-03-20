import { updateNode } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const _Number: LvtNodeDef = {
  _id: "Number",
  ui: {
    title: "Number",
    description: "",
  },
  portsIn: [
    {
      name: "input",
      dataType: "number",
      defaultValue: 0,
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
  rule: (a: any) => {
    return Number(a);
  },
  update: (node: LvtNode) => {
    updateNode(node, "result", ["input"]);
    return node;
  },
};

export default _Number;
