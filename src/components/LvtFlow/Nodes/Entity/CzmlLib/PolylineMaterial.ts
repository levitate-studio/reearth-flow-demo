import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const PolylineMaterial: LvtNodeDef = {
  _id: "PolylineMaterial",
  ui: {
    title: "PolylineMaterial",
    description: "A definition of how a polyline is colored or shaded.",
  },
  portsIn: [
    {
      name: "solidColor",
      dataType: "SolidColorMaterial",
      ui:{
        description: "A material that fills the line with a solid color, which may be translucent."
      },
    },{
      name: "polylineOutline",
      dataType: "PolylineOutlineMaterial",
      ui:{
        description: "A material that fills the line with a color and outline."
      },
    },{
      name: "polylineArrow",
      dataType: "PolylineArrowMaterial",
      ui:{
        description: "A material that fills the line with an arrow."
      },
    },{
      name: "polylineDash",
      dataType: "PolylineDashMaterial",
      ui:{
        description: "A material that fills the line with a pattern of dashes."
      },
    },{
      name: "polylineGlow",
      dataType: "PolylineGlowMaterial",
      ui:{
        description: "A material that fills the line with a glowing color."
      },
    },{
      name: "image",
      dataType: "ImageMaterial",
      ui:{
        description: "A material that fills the line with an image."
      },
    },{
      name: "grid",
      dataType: "GridMaterial",
      ui:{
        description: "A material that fills the line with a grid."
      },
    },{
      name: "stripe",
      dataType: "StripeMaterial",
      ui:{
        description: "A material that fills the line with alternating colors."
      },
    },{
      name: "checkerboard",
      dataType: "CheckerboardMaterial",
      ui:{
        description: "A material that fills the line with a checkerboard pattern."
      },
    },
  ],
  portsOut: [
    {
      name: "PolylineMaterial",
      dataType: "PolylineMaterial",
    },
  ],
  rule: (_solidColor: any, _polylineOutline: any, _polylineArrow: any, _polylineDash: any, _polylineGlow: any, _image: any, _grid: any, _stripe: any, _checkerboard: any) => {
    return packageSpreadValue(
      { _solidColor, _polylineOutline, _polylineArrow, _polylineDash, _polylineGlow, _image, _grid, _stripe, _checkerboard }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "PolylineMaterial", ["solidColor", "polylineOutline", "polylineArrow", "polylineDash", "polylineGlow", "image", "grid", "stripe", "checkerboard"]);
    return node;
  },
};

export default PolylineMaterial;