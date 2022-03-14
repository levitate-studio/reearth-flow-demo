import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const ImageMaterial: LvtNodeDef = {
  _id: "ImageMaterial",
  ui: {
    title: "ImageMaterial",
    description: "A material that fills the surface with an image.",
  },
  portsIn: [
    {
      name: "image",
      dataType: "Uri",
      ui:{
        description: "The image to display on the surface."
      },
    },{
      name: "repeat",
      dataType: "Repeat",
      ui:{
        description: "The number of times the image repeats along each axis."
      },
      defaultValue: [1, 1],
    },{
      name: "color",
      dataType: "Color",
      ui:{
        description: "The color of the image. This color value is multiplied with the image to produce the final color."
      },
    },{
      name: "transparent",
      dataType: "Boolean",
      ui:{
        description: "Whether or not the image has transparency."
      },
      defaultValue: false,
    },
  ],
  portsOut: [
    {
      name: "ImageMaterial",
      dataType: "ImageMaterial",
    },
  ],
  rule: (_image: any, _repeat: any, _color: any, _transparent: any) => {
    return packageSpreadValue(
      { _image, _repeat, _color, _transparent }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "ImageMaterial", ["image", "repeat", "color", "transparent"]);
    return node;
  },
};

export default ImageMaterial;