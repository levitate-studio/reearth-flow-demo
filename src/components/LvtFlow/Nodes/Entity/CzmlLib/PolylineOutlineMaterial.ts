import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const PolylineOutlineMaterial: LvtNodeDef = {
  _id: "PolylineOutlineMaterial",
  ui: {
    title: "PolylineOutlineMaterial",
    description: "A material that fills the surface of a line with an outlined color.",
  },
  portsIn: [
    {
      name: "color",
      dataType: "Color",
      ui:{
        description: "The color of the surface."
      },
    },{
      name: "outlineColor",
      dataType: "Color",
      ui:{
        description: "The color of the surface outline."
      },
    },{
      name: "outlineWidth",
      dataType: "Double",
      ui:{
        description: "The width of the outline."
      },
    },
  ],
  portsOut: [
    {
      name: "PolylineOutlineMaterial",
      dataType: "PolylineOutlineMaterial",
    },
  ],
  rule: (_color: any, _outlineColor: any, _outlineWidth: any) => {
    return packageSpreadValue(
      { _color, _outlineColor, _outlineWidth }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "PolylineOutlineMaterial", ["color", "outlineColor", "outlineWidth"]);
    return node;
  },
};

export default PolylineOutlineMaterial;