import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const SectorOptions: LvtNodeDef = {
  _id: "SectorOptions",
  ui: {
    title: "SectorOptions",
    description: "Options of Sector",
  },
  portsIn: [
    {
      name: "units",
      dataType: "string",
    },{
      name: "steps",
      dataType: "number",
    },{
      name: "properties",
      dataType: "Properties",
    },
  ],
  portsOut: [
    {
      name: "SectorOptions",
      dataType: "object",
    },
  ],
  rule: (_units: any, _steps: any, _properties: any) => {
    return packageSpreadValue(
      { _units, _steps, _properties }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "SectorOptions", ["units", "steps", "properties"]);
    return node;
  },
};

export default SectorOptions;