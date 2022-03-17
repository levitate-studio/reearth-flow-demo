import { updateNode } from "../../../Core/CommFuc";
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
    updateNode(node, "result", ["data", "index"]);
    return node;
  },
};

export default Select;
