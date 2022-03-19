import { updateNode } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const SelectColumn: LvtNodeDef = {
  _id: "SelectColumn",
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
      defaultValue: 0,
      ui: {
        component: "Select",
        componentOptions: {
          selectorSource: "csvData",
          selectorSourceType: "csvColumn",
        },
        hidden: true,
      },
    },
  ],
  portsOut: [
    {
      name: "result",
      dataType: "stringSpread",
    },
  ],
  rule: (a: any, b: number) => {
    const _temp = [];
    if (a) {
      for (let i = 1; i < a.length; i += 1) {
        _temp.push(a[i][Number(b)]);
      }
    }
    return _temp;
  },
  update: (node: LvtNode) => {
    updateNode(node, "result", ["csvData", "column"]);
    return node;
  },
};

export default SelectColumn;
