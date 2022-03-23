import { spreadData, updateNode } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Mix: LvtNodeDef = {
  _id: "Mix",
  ui: {
    title: "Mix",
    description: "",
  },
  portsIn: [
    {
      name: "input0",
      dataType: "string",
    },
    {
      name: "input1",
      dataType: "string",
    },
  ],
  portsOut: [
    {
      name: "mixed",
      dataType: "stringSpread",
    },
  ],
  rule: (input1: any, input2: any) => {
    const _temp = [];
    if (input1 && input2) {
      const _input1 = spreadData(input1);
      const _input2 = spreadData(input2);

      const max = Math.max(_input1.length, _input2.length);

      for (let i = 0; i < max; i += 1) {
        const i1 = _input1[i % _input1.length];
        const _i1 = spreadData(i1);
        const i2 = _input2[i % _input2.length];
        const _i2 = spreadData(i2);
        _temp.push([..._i1, ..._i2]);
      }
    }

    return _temp;
  },
  update: (node: LvtNode) => {
    updateNode(node, "mixed", ["input0", "input1"]);
    return node;
  },
};

export default Mix;
