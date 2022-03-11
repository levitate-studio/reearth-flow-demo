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
    const data = node.getPortInByName("data")?.getValue();
    node.getPortOutByName("index")?.setValue(node.rule(data));
    return node;
  },
};

export default GetIndex;
