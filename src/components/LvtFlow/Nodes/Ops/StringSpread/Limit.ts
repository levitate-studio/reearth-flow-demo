import { updateNode } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Limit: LvtNodeDef = {
  _id: "Limit",
  ui: {
    title: "Limit",
    description: "",
  },
  portsIn: [
    {
      name: "csvData",
      dataType: "stringSpread",
    },
    {
      name: "offset",
      dataType: "number",
      defaultValue: 1,
    },
    {
      name: "count",
      dataType: "number",
      defaultValue: 1,
    },
  ],
  portsOut: [
    {
      name: "result",
      dataType: "stringSpread",
    },
  ],
  rule: (csvData: any, offset: any, count: any) => {
    const _temp = [];
    if (csvData) {
      for (let i = offset, m = offset + count; i < m; i += 1) {
        if (csvData[i]) {
          _temp.push(csvData[i]);
        }
      }
    }
    return _temp;
  },
  update: (node: LvtNode) => {
    updateNode(node, "result", ["csvData", "offset", "count"]);
    return node;
  },
};

export default Limit;
