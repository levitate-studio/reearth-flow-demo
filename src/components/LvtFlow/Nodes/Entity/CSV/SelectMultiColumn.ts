import { updateNode } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const SelectMultiColumn: LvtNodeDef = {
  _id: "SelectMultiColumn",
  ui: {
    title: "SelectMultiColumn",
    description: "",
  },
  portsIn: [
    {
      name: "csvData",
      dataType: "stringSpread",
    },
    {
      name: "includeHeader",
      dataType: "boolean",
      defaultValue: true,
      ui: {
        hidden: true,
      },
    },
    {
      name: "columns",
      dataType: "booleanSpread",
      defaultValue: [],
      ui: {
        component: "Checkbox",
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
  rule: (a: any, inclueHeader: any, b: any) => {
    const _temp = [];
    if (a && b) {
      for (let i = inclueHeader ? 0 : 1; i < a.length; i += 1) {
        const row = [];
        for (let c = 0, cm = b.length; c < cm; c += 1) {
          if (b[c]) {
            row.push(a[i][c]);
          }
        }
        _temp.push(row);
      }
    }
    return _temp;
  },
  update: (node: LvtNode) => {
    updateNode(node, "result", ["csvData", "includeHeader", "columns"]);
    return node;
  },
};

export default SelectMultiColumn;
