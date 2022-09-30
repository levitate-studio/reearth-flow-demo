import { updateNode } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Writer: LvtNodeDef = {
  _id: "Writer",
  ui: {
    title: "Writer",
    description: "write GeoJSON data into a .geojson file",
  },
  portsIn: [
    {
      name: "GeoJSON",
      dataType: "object",
    },
    {
      name: "filename",
      dataType: "string",
      defaultValue: "geojson-data-output.geojson",
    },
  ],
  portsOut: [
    {
      name: "writer",
      dataType: "stringSpread",
      ui: {
        component: "FileGeoJSONWriter",
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
    updateNode(node, "writer", ["GeoJSON"]);
    return node;
  },
};

export default Writer;
