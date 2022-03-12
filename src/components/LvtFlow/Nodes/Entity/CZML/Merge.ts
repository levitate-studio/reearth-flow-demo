import { updateNode } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Merge: LvtNodeDef = {
  _id: "Merge",
  ui: {
    title: "Merge",
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
      name: "merged",
      dataType: "objectArray",
    },
  ],
  rule: (objects1: any, objects2: any) => {
    return [...objects1, ...objects2];
  },
  update: (node: LvtNode) => {
    updateNode(node, "merged", ["objects1", "objects2"]);
    return node;
  },
};

export default Merge;
