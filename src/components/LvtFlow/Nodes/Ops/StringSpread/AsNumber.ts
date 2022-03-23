import { spreadData, updateNode } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const AsNumber: LvtNodeDef = {
  _id: "AsNumber",
  ui: {
    title: "AsNumber",
    description: "Transfer string to number.",
  },
  portsIn: [
    {
      name: "string",
      dataType: "string",
    },
    {
      name: "strict",
      dataType: "boolean",
      defaultValue: true,
      ui: {
        hidden: true,
      },
    },
  ],
  portsOut: [
    {
      name: "number",
      dataType: "numberSpread",
    },
  ],
  rule: (s: any, strict: any) => {
    const _s = spreadData(s);
    const _temp = [];
    if (_s) {
      for (let i = 0; i < _s.length; i += 1) {
        if (Array.isArray(_s[i])) {
          const _row = [];
          for (let j = 0, jm = _s[i].length; j < jm; j += 1) {
            if (strict || Number(_s[i][j]) || Number(_s[i][j]) === 0) {
              _row.push(Number(_s[i][j]));
            } else {
              _row.push(_s[i][j]);
            }
          }
          _temp.push(_row);
        } else {
          if (strict || Number(_s[i]) || Number(_s[i]) === 0) {
            _temp.push(Number(_s[i]));
          } else {
            _temp.push(_s[i]);
          }
        }
      }
    }
    return _temp;
  },
  update: (node: LvtNode) => {
    updateNode(node, "number", ["string", "strict"]);
    return node;
  },
};

export default AsNumber;
