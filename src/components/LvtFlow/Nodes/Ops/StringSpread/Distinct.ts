import { spreadData, updateNode } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Distinct: LvtNodeDef = {
  _id: "Distinct",
  ui: {
    title: "Distinct",
    description: "Transfer string to number.",
  },
  portsIn: [
    {
      name: "string",
      dataType: "string",
    },
  ],
  portsOut: [
    {
      name: "distincted",
      dataType: "stringSpread",
    },
  ],
  rule: (s: any) => {
    const _s = spreadData(s);
    let _temp: any = [];
    if (_s) {
      if (Array.isArray(_s[0])) {
        for (let i = 0, m = _s.length; i < m; i += 1) {
          _temp.push(Array.from(new Set(_s[i])));
        }
      } else {
        _temp = Array.from(new Set(_s));
      }
    }
    return _temp;
  },
  update: (node: LvtNode) => {
    updateNode(node, "distincted", ["string"]);
    return node;
  },
};

export default Distinct;
