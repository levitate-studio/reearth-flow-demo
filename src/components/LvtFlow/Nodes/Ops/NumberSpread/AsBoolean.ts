import { spreadData, updateNode } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const AsBoolean: LvtNodeDef = {
  _id: "AsBoolean",
  ui: {
    title: "AsBoolean",
    description: "",
  },
  portsIn: [
    {
      name: "number",
      dataType: "number",
    },
  ],
  portsOut: [
    {
      name: "result",
      dataType: "booleanSpread",
    },
  ],
  rule: (s: any) => {
    const _s = spreadData(s);
    const _temp = [];
    if (_s) {
      for (let i = 0; i < _s.length; i += 1) {
        if (Array.isArray(_s[i])) {
          const _row = [];
          for (let j = 0, jm = _s[i].length; j < jm; j += 1) {
            _row.push(Number(_s[i][j] !== 0));
          }
          _temp.push(_row);
        } else {
          _temp.push(Number(_s[i] !== 0));
        }
      }
    }
    return _temp;
  },
  update: (node: LvtNode) => {
    updateNode(node, "result", ["number"]);
    return node;
  },
};

export default AsBoolean;
