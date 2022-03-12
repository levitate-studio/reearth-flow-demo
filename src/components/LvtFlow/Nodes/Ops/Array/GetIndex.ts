import { updateNode } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const GetIndex: LvtNodeDef = {
  _id: "GetIndex",
  ui: {
    title: "GetIndex",
    description: "",
  },
  portsIn: [
    {
      name: "data",
      dataType: "array",
    },
  ],
  portsOut: [
    {
      name: "index",
      dataType: "array",
    },
  ],
  rule: (a: any) => {
    return [...a.keys()];
  },
  update: (node: LvtNode) => {
    updateNode(node, "index", ["data"]);
    return node;
  },
};

export default GetIndex;
