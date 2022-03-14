import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Box: LvtNodeDef = {
  _id: "Box",
  ui: {
    title: "Box",
    description: "A box, which is a closed rectangular cuboid.",
  },
  portsIn: [
    {
      name: "show",
      dataType: "Boolean",
      ui:{
        description: "Whether or not the box is shown."
      },
      defaultValue: true,
    },{
      name: "dimensions",
      dataType: "BoxDimensions",
      ui:{
        description: "The dimensions of the box."
      },
    },{
      name: "heightReference",
      dataType: "HeightReference",
      ui:{
        description: "The height reference of the box, which indicates if the position is relative to terrain or not."
      },
      defaultValue: "NONE",
    },{
      name: "fill",
      dataType: "Boolean",
      ui:{
        description: "Whether or not the box is filled."
      },
    },{
      name: "material",
      dataType: "Material",
      ui:{
        description: "The material to display on the surface of the box."
      },
      defaultValue: "solid white",
    },{
      name: "outline",
      dataType: "Boolean",
      ui:{
        description: "Whether or not the box is outlined."
      },
    },{
      name: "outlineColor",
      dataType: "Color",
      ui:{
        description: "The color of the box outline."
      },
      defaultValue: "black",
    },{
      name: "outlineWidth",
      dataType: "Double",
      ui:{
        description: "The width of the box outline."
      },
    },{
      name: "shadows",
      dataType: "ShadowMode",
      ui:{
        description: "Whether or not the box casts or receives shadows."
      },
      defaultValue: "DISABLED",
    },{
      name: "distanceDisplayCondition",
      dataType: "DistanceDisplayCondition",
      ui:{
        description: "The display condition specifying the distance from the camera at which this box will be displayed."
      },
    },
  ],
  portsOut: [
    {
      name: "Box",
      dataType: "Box",
    },
  ],
  rule: (_show: any, _dimensions: any, _heightReference: any, _fill: any, _material: any, _outline: any, _outlineColor: any, _outlineWidth: any, _shadows: any, _distanceDisplayCondition: any) => {
    return packageSpreadValue(
      { _show, _dimensions, _heightReference, _fill, _material, _outline, _outlineColor, _outlineWidth, _shadows, _distanceDisplayCondition }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "Box", ["show", "dimensions", "heightReference", "fill", "material", "outline", "outlineColor", "outlineWidth", "shadows", "distanceDisplayCondition"]);
    return node;
  },
};

export default Box;