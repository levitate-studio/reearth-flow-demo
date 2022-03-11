import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const SelectColumn: LvtNodeDef = {
  _id: "SeclectColumn",
  ui: {
    title: "SelectColumn",
    description: "",
  },
  portsIn: [
    {
      name: "csvData",
      dataType: "stringSpread",
    },
    {
      name: "column",
      dataType: "number",
      ui: {
        component: "Select",
        componentOptions: {
          columnSource: "csvData",
        },
        hidden: true,
      },
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
    for (let i = 1; i < a.length; i += 1) {
      _temp.push(a[i][b]);
    }
    return _temp;
  },
  update: (node: LvtNode) => {
    const data = node.getPortInByName("csvData")?.getValue();
    const index = node.getPortInByName("column")?.getValue();
    node.getPortOutByName("result")?.setValue(node.rule(data, index));
    return node;
  },
};

export default SelectColumn;
