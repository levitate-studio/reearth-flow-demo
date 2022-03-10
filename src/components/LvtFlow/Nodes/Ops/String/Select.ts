import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Select: LvtNodeDef = {
  _id: "Select",
  ui: {
    title: "Select",
    description: "",
  },
  portsIn: [
    {
      name: "data",
      dataType: "stringSpread",
    },
    {
      name: "index",
      dataType: "number",
    },
  ],
  portsOut: [
    {
      name: "result",
      dataType: "stringArray",
    },
  ],
  rule: (a: any, b: number) => {
    const _temp = [];
    for (let i = 0; i < a.length; i += 1) {
      _temp.push(a[i][b]);
    }
    return _temp;
  },
  update: (node: LvtNode) => {
    const data = node.getPortInByName("data")?.getValue();
    const index = node.getPortInByName("index")?.getValue();
    node.getPortOutByName("result")?.setValue(node.rule(data, index));
    return node;
  },
};

export default Select;
