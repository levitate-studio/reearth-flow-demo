import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const CSV: LvtNodeDef = {
  _id: "CSV",
  ui: {
    title: "FileCSV",
    description: "",
  },
  portsIn: [
    {
      name: "file",
      dataType: "file",
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
    const file = node.getPortInByName("file")?.getValue();
    node.getPortOutByName("data")?.setValue(node.rule(file));
    return node;
  },
};

export default CSV;
