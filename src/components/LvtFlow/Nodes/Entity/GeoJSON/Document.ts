import { updateNode } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Document: LvtNodeDef = {
  _id: "Document",
  ui: {
    title: "Document",
    description: "",
  },
  portsIn: [
    {
      name: "features",
      dataType: "objectSpread",
    },
  ],
  portsOut: [
    {
      name: "GeoJSON",
      dataType: "objectSpread",
    },
  ],
  rule: (features: any) => {
    const geoJSON: any = {
      type: "FeatureCollection",
      features: Array.isArray(features) ? [...features] : [],
    };

    return geoJSON;
  },
  update: (node: LvtNode) => {
    updateNode(node, "GeoJSON", ["features"]);
    return node;
  },
};

export default Document;
