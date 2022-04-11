import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const InterpolateOptions: LvtNodeDef = {
  _id: "InterpolateOptions",
  ui: {
    title: "InterpolateOptions",
    description: "Options of Interpolate",
  },
  portsIn: [
    {
      name: "gridType",
      dataType: "string",
    },{
      name: "property",
      dataType: "string",
    },{
      name: "units",
      dataType: "string",
    },{
      name: "weight",
      dataType: "number",
    },
  ],
  portsOut: [
    {
      name: "InterpolateOptions",
      dataType: "object",
    },
  ],
  rule: (_gridType: any, _property: any, _units: any, _weight: any) => {
    return packageSpreadValue(
      { _gridType, _property, _units, _weight }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "InterpolateOptions", ["gridType", "property", "units", "weight"]);
    return node;
  },
};

export default InterpolateOptions;