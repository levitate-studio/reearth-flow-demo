import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Rectangle: LvtNodeDef = {
  _id: "Rectangle",
  ui: {
    title: "Rectangle",
    description: "A cartographic rectangle, which conforms to the curvature of the globe and can be placed on the surface or at altitude and can optionally be extruded into a volume.",
  },
  portsIn: [
    {
      name: "show",
      dataType: "Boolean",
      ui:{
        description: "Whether or not the rectangle is shown."
      },
      defaultValue: true,
    },{
      name: "coordinates",
      dataType: "RectangleCoordinates",
      ui:{
        description: "The coordinates of the rectangle."
      },
    },{
      name: "height",
      dataType: "Double",
      ui:{
        description: "The height of the rectangle."
      },
      defaultValue: 0.0,
    },{
      name: "heightReference",
      dataType: "HeightReference",
      ui:{
        description: "The height reference of the rectangle, which indicates if `height` is relative to terrain or not."
      },
    },{
      name: "extrudedHeight",
      dataType: "Double",
      ui:{
        description: "The extruded height of the rectangle."
      },
    },{
      name: "extrudedHeightReference",
      dataType: "HeightReference",
      ui:{
        description: "The extruded height reference of the rectangle, which indicates if `extrudedHeight` is relative to terrain or not."
      },
      defaultValue: "NONE",
    },{
      name: "rotation",
      dataType: "Double",
      ui:{
        description: "The rotation of the rectangle clockwise from north."
      },
    },{
      name: "stRotation",
      dataType: "Double",
      ui:{
        description: "The rotation of any applied texture. A positive rotation is counter-clockwise."
      },
      defaultValue: 0.0,
    },{
      name: "granularity",
      dataType: "Double",
      ui:{
        description: "The sampling distance, in radians."
      },
    },{
      name: "fill",
      dataType: "Boolean",
      ui:{
        description: "Whether or not the rectangle is filled."
      },
      defaultValue: true,
    },{
      name: "material",
      dataType: "Material",
      ui:{
        description: "The material to display on the surface of the rectangle."
      },
    },{
      name: "outline",
      dataType: "Boolean",
      ui:{
        description: "Whether or not the rectangle is outlined."
      },
      defaultValue: false,
    },{
      name: "outlineColor",
      dataType: "Color",
      ui:{
        description: "The color of the rectangle outline."
      },
    },{
      name: "outlineWidth",
      dataType: "Double",
      ui:{
        description: "The width of the rectangle outline."
      },
      defaultValue: 1.0,
    },{
      name: "shadows",
      dataType: "ShadowMode",
      ui:{
        description: "Whether or not the rectangle casts or receives shadows."
      },
    },{
      name: "distanceDisplayCondition",
      dataType: "DistanceDisplayCondition",
      ui:{
        description: "The display condition specifying at what distance from the camera this rectangle will be displayed."
      },
    },{
      name: "classificationType",
      dataType: "ClassificationType",
      ui:{
        description: "Whether a classification affects terrain, 3D Tiles, or both."
      },
      defaultValue: "BOTH",
    },{
      name: "zIndex",
      dataType: "Integer",
      ui:{
        description: "The z-index of the rectangle, used for ordering ground geometry. Only has an effect if the rectangle is constant, and `height` and `extrudedHeight` are not specified."
      },
    },
  ],
  portsOut: [
    {
      name: "Rectangle",
      dataType: "Rectangle",
    },
  ],
  rule: (_show: any, _coordinates: any, _height: any, _heightReference: any, _extrudedHeight: any, _extrudedHeightReference: any, _rotation: any, _stRotation: any, _granularity: any, _fill: any, _material: any, _outline: any, _outlineColor: any, _outlineWidth: any, _shadows: any, _distanceDisplayCondition: any, _classificationType: any, _zIndex: any) => {
    return packageSpreadValue(
      { _show, _coordinates, _height, _heightReference, _extrudedHeight, _extrudedHeightReference, _rotation, _stRotation, _granularity, _fill, _material, _outline, _outlineColor, _outlineWidth, _shadows, _distanceDisplayCondition, _classificationType, _zIndex }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "Rectangle", ["show", "coordinates", "height", "heightReference", "extrudedHeight", "extrudedHeightReference", "rotation", "stRotation", "granularity", "fill", "material", "outline", "outlineColor", "outlineWidth", "shadows", "distanceDisplayCondition", "classificationType", "zIndex"]);
    return node;
  },
};

export default Rectangle;