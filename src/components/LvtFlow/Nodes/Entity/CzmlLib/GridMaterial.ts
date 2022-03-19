import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const GridMaterial: LvtNodeDef = {
  _id: "GridMaterial",
  ui: {
    title: "GridMaterial",
    description: "A material that fills the surface with a two-dimensional grid.",
  },
  portsIn: [
    {
      name: "color",
      dataType: "Color",
      ui:{
        description: "The color of the surface."
      },
    },{
      name: "cellAlpha",
      dataType: "Double",
      ui:{
        description: "The alpha value for the space between grid lines. This will be combined with the color alpha."
      },
    },{
      name: "lineCount",
      dataType: "LineCount",
      ui:{
        description: "The number of grid lines along each axis."
      },
    },{
      name: "lineThickness",
      dataType: "LineThickness",
      ui:{
        description: "The thickness of grid lines along each axis, in pixels."
      },
    },{
      name: "lineOffset",
      dataType: "LineOffset",
      ui:{
        description: "The offset of grid lines along each axis, as a percentage from 0 to 1."
      },
    },
  ],
  portsOut: [
    {
      name: "GridMaterial",
      dataType: "GridMaterial",
    },
  ],
  rule: (_color: any, _cellAlpha: any, _lineCount: any, _lineThickness: any, _lineOffset: any) => {
    return packageSpreadValue(
      { _color, _cellAlpha, _lineCount, _lineThickness, _lineOffset }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "GridMaterial", ["color", "cellAlpha", "lineCount", "lineThickness", "lineOffset"]);
    return node;
  },
};

export default GridMaterial;