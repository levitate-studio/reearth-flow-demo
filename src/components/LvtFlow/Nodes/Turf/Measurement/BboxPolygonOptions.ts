import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const BboxPolygonOptions: LvtNodeDef = {
  _id: "BboxPolygonOptions",
  ui: {
    title: "BboxPolygonOptions",
    description: "Options of BboxPolygon",
  },
  portsIn: [
    {
      name: "properties",
      dataType: "Properties",
    },{
      name: "id",
      dataType: "(string|number)",
    },
  ],
  portsOut: [
    {
      name: "BboxPolygonOptions",
      dataType: "object",
    },
  ],
  rule: (_properties: any, _id: any) => {
    return packageSpreadValue(
      { _properties, _id }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "BboxPolygonOptions", ["properties", "id"]);
    return node;
  },
};

export default BboxPolygonOptions;