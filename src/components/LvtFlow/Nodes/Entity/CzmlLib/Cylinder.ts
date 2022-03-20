import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Cylinder: LvtNodeDef = {
  _id: "Cylinder",
  ui: {
    title: "Cylinder",
    description: "A cylinder, truncated cone, or cone defined by a length, top radius, and bottom radius.",
  },
  portsIn: [
    {
      name: "show",
      dataType: "Boolean",
      ui:{
        description: "Whether or not the cylinder is shown."
      },
    },{
      name: "length",
      dataType: "Double",
      ui:{
        description: "The length of the cylinder."
      },
    },{
      name: "topRadius",
      dataType: "Double",
      ui:{
        description: "The radius of the top of the cylinder."
      },
    },{
      name: "bottomRadius",
      dataType: "Double",
      ui:{
        description: "The radius of the bottom of the cylinder."
      },
    },{
      name: "heightReference",
      dataType: "HeightReference",
      ui:{
        description: "The height reference of the cylinder, which indicates if the position is relative to terrain or not."
      },
    },{
      name: "fill",
      dataType: "Boolean",
      ui:{
        description: "Whether or not the cylinder is filled."
      },
    },{
      name: "material",
      dataType: "Material",
      ui:{
        description: "The material to display on the surface of the cylinder."
      },
    },{
      name: "outline",
      dataType: "Boolean",
      ui:{
        description: "Whether or not the cylinder is outlined."
      },
    },{
      name: "outlineColor",
      dataType: "Color",
      ui:{
        description: "The color of the cylinder outline."
      },
    },{
      name: "outlineWidth",
      dataType: "Double",
      ui:{
        description: "The width of the cylinder outline."
      },
    },{
      name: "numberOfVerticalLines",
      dataType: "Integer",
      ui:{
        description: "The number of vertical lines to draw along the perimeter for the outline."
      },
    },{
      name: "slices",
      dataType: "Integer",
      ui:{
        description: "The number of edges around the perimeter of the cylinder."
      },
    },{
      name: "shadows",
      dataType: "ShadowMode",
      ui:{
        description: "Whether or not the cylinder casts or receives shadows."
      },
    },{
      name: "distanceDisplayCondition",
      dataType: "DistanceDisplayCondition",
      ui:{
        description: "The display condition specifying the distance from the camera at which this cylinder will be displayed."
      },
    },
  ],
  portsOut: [
    {
      name: "Cylinder",
      dataType: "Cylinder",
    },
  ],
  rule: (_show: any, _length: any, _topRadius: any, _bottomRadius: any, _heightReference: any, _fill: any, _material: any, _outline: any, _outlineColor: any, _outlineWidth: any, _numberOfVerticalLines: any, _slices: any, _shadows: any, _distanceDisplayCondition: any) => {
    return packageSpreadValue(
      { _show, _length, _topRadius, _bottomRadius, _heightReference, _fill, _material, _outline, _outlineColor, _outlineWidth, _numberOfVerticalLines, _slices, _shadows, _distanceDisplayCondition }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "Cylinder", ["show", "length", "topRadius", "bottomRadius", "heightReference", "fill", "material", "outline", "outlineColor", "outlineWidth", "numberOfVerticalLines", "slices", "shadows", "distanceDisplayCondition"]);
    return node;
  },
};

export default Cylinder;