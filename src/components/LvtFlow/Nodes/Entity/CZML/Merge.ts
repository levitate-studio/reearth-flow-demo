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
      dataType: "objectSpread",
      defaultValue: [],
    },
    {
      name: "objects2",
      dataType: "objectSpread",
      defaultValue: [],
    },
  ],
  portsOut: [
    {
      name: "merged",
      dataType: "objectSpread",
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
