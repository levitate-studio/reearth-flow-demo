import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const RhumbDestinationOptions: LvtNodeDef = {
  _id: "RhumbDestinationOptions",
  ui: {
    title: "RhumbDestinationOptions",
    description: "Options of RhumbDestination",
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
      name: "RhumbDestinationOptions",
      dataType: "object",
    },
  ],
  rule: (_units: any, _properties: any) => {
    return packageSpreadValue(
      { _units, _properties }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "RhumbDestinationOptions", ["units", "properties"]);
    return node;
  },
};

export default RhumbDestinationOptions;