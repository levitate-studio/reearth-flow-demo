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
      dataType: "objectArray",
    },
    {
      name: "objects2",
      dataType: "objectArray",
    },
  ],
  portsOut: [
    {
      name: "mixed",
      dataType: "objectArray",
    },
  ],
  rule: (objects1: any, objects2: any) => {
    const _objects1 = spreadData(objects1);
    const _objects2 = spreadData(objects2);
    const max = Math.max(_objects1.length, _objects2.length);
    const _temp = [];
    for (let i = 0; i < max; i += 1) {
      _temp.push({
        ..._objects1[i % _objects1.length],
        ..._objects2[i % _objects2.length],
      });
    }
    return _temp;
  },
  update: (node: LvtNode) => {
    updateNode(node, "mixed", ["objects1", "objects2"]);
    return node;
  },
};

export default Mix;
