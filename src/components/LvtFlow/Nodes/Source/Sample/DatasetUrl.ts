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
      dataType: "objectSpread",
      defaultValue: [
        {
          title: "French cities",
          value: "/sampleData/french-cities.csv",
        },
        {
          title: "World cities",
          value: "/sampleData/world-cities.csv",
        },
        {
          title: "Countries",
          value: "/sampleData/countries.csv",
        },
        {
          title: "Countries indicators",
          value: "/sampleData/countries-indicators.csv",
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
  rule: (dataset: any) => {
    return dataset;
  },
  update: (node: LvtNode) => {
    updateNode(node, "url", ["dataset"]);
    return node;
  },
};

export default DatasetUrl;
