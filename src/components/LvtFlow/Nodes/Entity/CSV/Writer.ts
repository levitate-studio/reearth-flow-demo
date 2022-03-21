import { updateNode } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Writer: LvtNodeDef = {
  _id: "Writer",
  ui: {
    title: "Writer",
    description: "write csv data into a .csv file",
  },
  portsIn: [
    {
      name: "csvData",
      dataType: "stringSpread",
    },
    {
      name: "filename",
      dataType: "string",
      defaultValue: "csv-data-output.csv",
    },
  ],
  portsOut: [
    {
      name: "writer",
      dataType: "stringSpread",
      ui: {
        component: "FileCSVWriter",
        componentOptions: {
          dataSource: "filename",
        },
        hidden: true,
      },
    },
  ],
  rule: (a: any) => {
    return a;
  },
  update: (node: LvtNode) => {
    updateNode(node, "writer", ["csvData"]);
    return node;
  },
};

export default Writer;
