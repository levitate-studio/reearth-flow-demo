import { spreadData, updateNode } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Not: LvtNodeDef = {
  _id: "Not",
  ui: {
    title: "Not",
    description: "",
  },
  portsIn: [
    {
      name: "input",
      dataType: "booleanSpread",
    },
  ],
  portsOut: [
    {
      name: "not",
      dataType: "booleanSpread",
    },
  ],
  rule: (s: any) => {
    const _s = spreadData(s);
    const _temp = [];
    if (_s) {
      for (let i = 0; i < _s.length; i += 1) {
        _temp.push(!_s[i]);
      }
    }
    return _temp;
  },
  update: (node: LvtNode) => {
    updateNode(node, "not", ["input"]);
    return node;
  },
};

export default Not;
