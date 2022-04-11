import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const CenterOptions: LvtNodeDef = {
  _id: "CenterOptions",
  ui: {
    title: "CenterOptions",
    description: "Options of Center",
  },
  portsIn: [
    {
      name: "properties",
      dataType: "Object",
    },{
      name: "bbox",
      dataType: "Object",
    },{
      name: "id",
      dataType: "Object",
    },
  ],
  portsOut: [
    {
      name: "CenterOptions",
      dataType: "object",
    },
  ],
  rule: (_properties: any, _bbox: any, _id: any) => {
    return packageSpreadValue(
      { _properties, _bbox, _id }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "CenterOptions", ["properties", "bbox", "id"]);
    return node;
  },
};

export default CenterOptions;