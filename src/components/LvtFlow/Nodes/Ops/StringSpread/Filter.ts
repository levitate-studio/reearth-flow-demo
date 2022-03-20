import { updateNode } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Filter: LvtNodeDef = {
  _id: "Filter",
  ui: {
    title: "Filter",
    description: "",
  },
  portsIn: [
    {
      name: "data",
      dataType: "stringSpread",
    },
    {
      name: "pass",
      dataType: "booleanSpread",
    },
  ],
  portsOut: [
    {
      name: "result",
      dataType: "stringSpread",
    },
  ],
  rule: (a: any, b: any) => {
    const _a = typeof a === "object" ? a : [a];
    const _b = typeof b === "object" ? b : [b];
    const max = Math.max(_a.length, _b.length);
    const _temp = [];
    for (let i = 0; i < max; i += 1) {
      if (_b[i % _b.length]) {
        _temp.push(_a[i % _a.length]);
      }
    }
    return _temp;
  },
  update: (node: LvtNode) => {
    updateNode(node, "result", ["data", "pass"]);
    return node;
  },
};

export default Filter;
