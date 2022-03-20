import { updateNode } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const CSV: LvtNodeDef = {
  _id: "CSV",
  ui: {
    title: "CSV",
    description: "",
  },
  portsIn: [
    {
      name: "file",
      dataType: "string",
      ui: {
        component: "FileCSVInput",
        hidden: true,
      },
    },
  ],
  portsOut: [
    {
      name: "data",
      dataType: "stringSpread",
    },
  ],
  rule: (a: any) => {
    return a;
  },
  update: (node: LvtNode) => {
    updateNode(node, "data", ["file"]);
    return node;
  },
};

export default CSV;
