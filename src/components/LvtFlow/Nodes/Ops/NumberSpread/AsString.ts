import { spreadData, updateNode } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const AsString: LvtNodeDef = {
  _id: "AsString",
  ui: {
    title: "AsString",
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
      name: "string",
      dataType: "stringSpread",
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
            _row.push(String(_s[i][j]));
          }
          _temp.push(_row);
        } else {
          _temp.push(String(_s[i]));
        }
      }
    }
    return _temp;
  },
  update: (node: LvtNode) => {
    updateNode(node, "string", ["number"]);
    return node;
  },
};

export default AsString;
