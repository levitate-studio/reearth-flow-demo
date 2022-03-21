import { spreadData, updateNode } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Limit: LvtNodeDef = {
  _id: "Limit",
  ui: {
    title: "Limit",
    description: "",
  },
  portsIn: [
    {
      name: "input",
      dataType: "stringSpread",
    },
    {
      name: "offset",
      dataType: "number",
      defaultValue: 1,
    },
    {
      name: "count",
      dataType: "number",
      defaultValue: 1,
    },
  ],
  portsOut: [
    {
      name: "result",
      dataType: "stringSpread",
    },
  ],
  rule: (input: any, offset: any, count: any) => {
    const _temp = [];
    const _input = spreadData(input);
    if (_input) {
      for (
        let i = Number(offset),
          m =
            Number(count) === -1
              ? _input.length
              : Number(offset) + Number(count);
        i < m;
        i += 1
      ) {
        if (_input[i]) {
          _temp.push(_input[i]);
        }
      }
    }
    return _temp;
  },
  update: (node: LvtNode) => {
    updateNode(node, "result", ["input", "offset", "count"]);
    return node;
  },
};

export default Limit;
