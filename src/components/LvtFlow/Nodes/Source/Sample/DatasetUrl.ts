import { updateNode } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const DatasetUrl: LvtNodeDef = {
  _id: "DatasetUrl",
  ui: {
    title: "DatasetUrl",
    description: "",
  },
  portsIn: [
    {
      name: "datasetUrls",
      dataType: "objectArray",
      defaultValue: [
        {
          title: "French cities",
          value: "/sampleData/fr.csv",
        },
        {
          title: "World Cities",
          value: "/sampleData/worldcities.csv",
        },
      ],
      ui: {
        hidden: true,
      },
    },
    {
      name: "dataset",
      dataType: "number",
      ui: {
        component: "Select",
        componentOptions: {
          selectorSource: "datasetUrls",
          selectorSourceType: "preset",
        },
        hidden: true,
      },
    },
  ],
  portsOut: [
    {
      name: "url",
      dataType: "string",
    },
  ],
  rule: (datasetUrls: any, index: any) => {
    return datasetUrls[index - 1]?.value;
  },
  update: (node: LvtNode) => {
    updateNode(node, "url", ["datasetUrls", "dataset"]);
    return node;
  },
};

export default DatasetUrl;
