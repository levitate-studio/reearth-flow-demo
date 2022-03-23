import { spreadData, updateNode, deepcopy } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Sort: LvtNodeDef = {
  _id: "Sort",
  ui: {
    title: "Sort",
    description: "",
  },
  portsIn: [
    {
      name: "data",
      dataType: "stringSpread",
    },
    {
      name: "column",
      dataType: "number",
      defaultValue: 0,
      ui: {
        component: "Select",
        componentOptions: {
          selectorSourceType: "csvColumn",
          selectorSource: "data",
        },
        hidden: true,
      },
    },
    {
      name: "order",
      dataType: "string",
      ui: {
        component: "MultiRadio",
        componentOptions: {
          radioSourceType: "self",
          radioOptions: [
            {
              title: "ASC",
              value: "ASC",
            },
            {
              title: "DESC",
              value: "DESC",
            },
          ],
        },
      },
      defaultValue: "ASC",
    },
  ],
  portsOut: [
    {
      name: "result",
      dataType: "stringSpread",
    },
  ],
  rule: (data: any, column: number, order: any) => {
    const _data = spreadData(data);
    let _temp = [];
    if (_data) {
      _temp = deepcopy(_data);
      if (_temp && Array.isArray(_temp[0])) {
        _temp.sort((a: any, b: any) => {
          if (Number(a[column])) {
            return order === "ASC"
              ? a[column] - b[column]
              : b[column] - a[column];
          } else {
            return order === "ASC"
              ? a[column].localeCompare(b[column])
              : b[column].localeCompare(a[column]);
          }
        });
      }
    }

    return _temp;
  },
  update: (node: LvtNode) => {
    updateNode(node, "result", ["data", "column", "order"]);
    return node;
  },
};

export default Sort;
