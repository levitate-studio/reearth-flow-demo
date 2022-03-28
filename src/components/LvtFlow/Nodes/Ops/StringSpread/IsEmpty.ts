import { spreadData, updateNode } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const IsEmpty: LvtNodeDef = {
  _id: "IsEmpty",
  ui: {
    title: "IsEmpty",
    description: "",
  },
  portsIn: [
    {
      name: "string",
      dataType: "stringSpread",
    },
  ],
  portsOut: [
    {
      name: "isEmpty",
      dataType: "booleanSpread",
    },
  ],
  rule: (s: any) => {
    const _s = spreadData(s);
    const _temp = [];
    if (_s) {
      for (let i = 0; i < _s.length; i += 1) {
        const t = _s[i].trim();
        _temp.push(t === "");
      }
    }
    return _temp;
  },
  update: (node: LvtNode) => {
    updateNode(node, "isEmpty", ["string"]);
    return node;
  },
};

export default IsEmpty;
