import Papa from "papaparse";

import { xhrGet } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const CSV: LvtNodeDef = {
  _id: "CSV",
  ui: {
    title: "CSV",
    description: "",
  },
  portsIn: [
    {
      name: "url",
      dataType: "string",
    },
  ],
  portsOut: [
    {
      name: "data",
      dataType: "stringSpread",
    },
  ],
  rule: async (url: string) => {
    if (url) {
      const csvData = await xhrGet(url);
      if (csvData) {
        const { data }: any = Papa.parse(csvData as any);
        return data;
      }
    }
  },
  update: async (node: LvtNode) => {
    const url = node.getPortInByName("url")?.getValue();
    if (url) {
      const data = await node.rule(url);
      node.getPortOutByName("data")?.setValue(data);
      return node;
    } else {
      node.getPortOutByName("data")?.setValue([[]]);
      return node;
    }
  },
};

export default CSV;
