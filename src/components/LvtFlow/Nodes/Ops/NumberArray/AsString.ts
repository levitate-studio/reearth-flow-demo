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
      dataType: "numberArray",
    },
  ],
  portsOut: [
    {
      name: "string",
      dataType: "stringArray",
    },
  ],
  rule: (s: any) => {
    const _s = spreadData(s);
    const _temp = [];
    if (_s) {
      for (let i = 0; i < _s.length; i += 1) {
        _temp.push(String(_s[i]));
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
