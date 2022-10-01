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
      name: "objects1",
      dataType: "objectSpread",
      defaultValue: {},
    },
    {
      name: "objects2",
      dataType: "objectSpread",
      defaultValue: {},
    },
    {
      name: "objects3",
      dataType: "objectSpread",
      defaultValue: {},
    },
    {
      name: "objects4",
      dataType: "objectSpread",
      defaultValue: {},
    },
  ],
  portsOut: [
    {
      name: "mixed",
      dataType: "objectSpread",
    },
  ],
  rule: (objects1: any, objects2: any, objects3: any, objects4: any) => {
    const _objects1 = spreadData(objects1);
    const _objects2 = spreadData(objects2);
    const _objects3 = spreadData(objects3);
    const _objects4 = spreadData(objects4);
    const max = Math.max(
      _objects1.length,
      _objects2.length,
      _objects3.length,
      _objects4.length
    );
    const _temp = [];
    for (let i = 0; i < max; i += 1) {
      _temp.push({
        ..._objects1[i % _objects1.length],
        ..._objects2[i % _objects2.length],
        ..._objects3[i % _objects3.length],
        ..._objects4[i % _objects4.length],
      });
    }
    return _temp;
  },
  update: (node: LvtNode) => {
    updateNode(node, "mixed", ["objects1", "objects2", "objects3", "objects4"]);
    return node;
  },
};

export default Mix;
