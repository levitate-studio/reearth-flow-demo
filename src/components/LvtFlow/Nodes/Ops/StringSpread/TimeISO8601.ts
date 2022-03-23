import toISOString from "to-iso-string";

import { spreadData, updateNode } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const TimeISO8601: LvtNodeDef = {
  _id: "TimeISO8601",
  ui: {
    title: "TimeISO8601",
    description: "Return a ISO-8601 formated time string.",
  },
  portsIn: [
    {
      name: "time",
      dataType: "string",
    },
  ],
  portsOut: [
    {
      name: "timeISO8601",
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
            _row.push(toISOString(new Date(_s[i][j])));
          }
          _temp.push(_row);
        } else {
          _temp.push(toISOString(new Date(_s[i])));
        }
      }
    }
    return _temp;
  },
  update: (node: LvtNode) => {
    updateNode(node, "timeISO8601", ["time"]);
    return node;
  },
};

export default TimeISO8601;
