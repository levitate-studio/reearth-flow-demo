import { spreadData, updateNode } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const AsNumber: LvtNodeDef = {
  _id: "AsNumber",
  ui: {
    title: "AsNumber",
    description: "",
  },
  portsIn: [
    {
      name: "string",
      dataType: "stringArray",
    },
  ],
  portsOut: [
    {
      name: "number",
      dataType: "numberArray",
    },
  ],
  rule: (s: any) => {
    const _s = spreadData(s);
    const _temp = [];
    for (let i = 0; i < _s.length; i += 1) {
      _temp.push(Number(_s[i]));
    }
    return _temp;
  },
  update: (node: LvtNode) => {
    updateNode(node, "number", ["string"]);
    return node;
  },
};

export default AsNumber;
