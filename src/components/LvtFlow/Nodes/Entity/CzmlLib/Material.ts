import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Material: LvtNodeDef = {
  _id: "Material",
  ui: {
    title: "Material",
    description: "A definition of how a surface is colored or shaded.",
  },
  portsIn: [
    {
      name: "solidColor",
      dataType: "SolidColorMaterial",
      ui:{
        description: "A material that fills the surface with a solid color, which may be translucent."
      },
    },{
      name: "image",
      dataType: "ImageMaterial",
      ui:{
        description: "A material that fills the surface with an image."
      },
    },{
      name: "grid",
      dataType: "GridMaterial",
      ui:{
        description: "A material that fills the surface with a grid."
      },
    },{
      name: "stripe",
      dataType: "StripeMaterial",
      ui:{
        description: "A material that fills the surface with alternating colors."
      },
    },{
      name: "checkerboard",
      dataType: "CheckerboardMaterial",
      ui:{
        description: "A material that fills the surface with a checkerboard pattern."
      },
    },
  ],
  portsOut: [
    {
      name: "Material",
      dataType: "Material",
    },
  ],
  rule: (_solidColor: any, _image: any, _grid: any, _stripe: any, _checkerboard: any) => {
    return packageSpreadValue(
      { _solidColor, _image, _grid, _stripe, _checkerboard }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "Material", ["solidColor", "image", "grid", "stripe", "checkerboard"]);
    return node;
  },
};

export default Material;