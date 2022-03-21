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
      name: "dataset",
      dataType: "number",
      ui: {
        component: "Select",
        componentOptions: {
          selectorSourceType: "self",
          selectorOptions: [
            {
              title: "Japan cities",
              value: "/sampleData/japan-cities.csv",
            },
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
            {
              title: "都道府県データ / 社会生活統計指標 (online && dev)",
              value:
                "/api.e-stat.go.jp/rest/3.0/app/getSimpleStatsData?appId=8a8b80462573b03c3dd45514adcc6d70ae97a156&lang=J&statsDataId=0000010201&metaGetFlg=Y&cntGetFlg=N&explanationGetFlg=Y&annotationGetFlg=Y&sectionHeaderFlg=1&replaceSpChars=0",
            },
            {
              title: "都道府県データ / 社会生活統計指標 (local)",
              value: "/sampleData/e-stat-0000010201.csv",
            },
            {
              title:
                "Prefectural Data Social Indicators by Prefecture (online && dev)",
              value:
                "/api.e-stat.go.jp/rest/3.0/app/getSimpleStatsData?appId=8a8b80462573b03c3dd45514adcc6d70ae97a156&lang=E&statsDataId=0000010201&metaGetFlg=Y&cntGetFlg=N&explanationGetFlg=Y&annotationGetFlg=Y&sectionHeaderFlg=1&replaceSpChars=0",
            },
            {
              title: "Prefectural Data Social Indicators by Prefecture (local)",
              value: "/sampleData/e-stat-0000010201-en.csv",
            },
          ],
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
