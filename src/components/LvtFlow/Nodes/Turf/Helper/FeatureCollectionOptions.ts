import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const FeatureCollectionOptions: LvtNodeDef = {
  _id: "FeatureCollectionOptions",
  ui: {
    title: "FeatureCollectionOptions",
    description: "Options of FeatureCollection",
  },
  portsIn: [
    {
      name: "bbox",
      dataType: "(Array <number>)",
    },{
      name: "id",
      dataType: "((string|number))",
    },
  ],
  portsOut: [
    {
      name: "FeatureCollectionOptions",
      dataType: "object",
    },
  ],
  rule: (_bbox: any, _id: any) => {
    return packageSpreadValue(
      { _bbox, _id }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "FeatureCollectionOptions", ["bbox", "id"]);
    return node;
  },
};

export default FeatureCollectionOptions;