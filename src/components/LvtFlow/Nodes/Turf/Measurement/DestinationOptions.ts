import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const DestinationOptions: LvtNodeDef = {
  _id: "DestinationOptions",
  ui: {
    title: "DestinationOptions",
    description: "Options of Destination",
  },
  portsIn: [
    {
      name: "units",
      dataType: "string",
    },{
      name: "properties",
      dataType: "Object",
    },
  ],
  portsOut: [
    {
      name: "DestinationOptions",
      dataType: "object",
    },
  ],
  rule: (_units: any, _properties: any) => {
    return packageSpreadValue(
      { _units, _properties }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "DestinationOptions", ["units", "properties"]);
    return node;
  },
};

export default DestinationOptions;