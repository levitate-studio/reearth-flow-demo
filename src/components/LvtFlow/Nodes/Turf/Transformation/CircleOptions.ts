import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const CircleOptions: LvtNodeDef = {
  _id: "CircleOptions",
  ui: {
    title: "CircleOptions",
    description: "Options of Circle",
  },
  portsIn: [
    {
      name: "steps",
      dataType: "number",
    },{
      name: "units",
      dataType: "string",
    },{
      name: "properties",
      dataType: "Object",
    },
  ],
  portsOut: [
    {
      name: "CircleOptions",
      dataType: "object",
    },
  ],
  rule: (_steps: any, _units: any, _properties: any) => {
    return packageSpreadValue(
      { _steps, _units, _properties }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "CircleOptions", ["steps", "units", "properties"]);
    return node;
  },
};

export default CircleOptions;