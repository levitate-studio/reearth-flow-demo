import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Corridor: LvtNodeDef = {
  _id: "Corridor",
  ui: {
    title: "Corridor",
    description: "A corridor, which is a shape defined by a centerline and width that conforms to the curvature of the globe. It can be placed on the surface or at altitude and can optionally be extruded into a volume.",
  },
  portsIn: [
    {
      name: "show",
      dataType: "Boolean",
      ui:{
        description: "Whether or not the corridor is shown."
      },
      defaultValue: true,
    },{
      name: "positions",
      dataType: "PositionList",
      ui:{
        description: "The array of positions defining the centerline of the corridor."
      },
    },{
      name: "width",
      dataType: "Double",
      ui:{
        description: "The width of the corridor, which is the distance between the edges of the corridor."
      },
    },{
      name: "height",
      dataType: "Double",
      ui:{
        description: "The height of the corridor, which is the altitude of the corridor relative to the surface."
      },
      defaultValue: 0.0,
    },{
      name: "heightReference",
      dataType: "HeightReference",
      ui:{
        description: "The height reference of the corridor, which indicates if `height` is relative to terrain or not."
      },
    },{
      name: "extrudedHeight",
      dataType: "Double",
      ui:{
        description: "The extruded height of the corridor, which is the altitude of the corridor's extruded face relative to the surface."
      },
    },{
      name: "extrudedHeightReference",
      dataType: "HeightReference",
      ui:{
        description: "The extruded height reference of the corridor, which indicates if `extrudedHeight` is relative to terrain or not."
      },
      defaultValue: "NONE",
    },{
      name: "cornerType",
      dataType: "CornerType",
      ui:{
        description: "The style of the corners of the corridor."
      },
    },{
      name: "granularity",
      dataType: "Double",
      ui:{
        description: "The sampling distance, in radians."
      },
      defaultValue: "π / 180.0",
    },{
      name: "fill",
      dataType: "Boolean",
      ui:{
        description: "Whether or not the corridor is filled."
      },
    },{
      name: "material",
      dataType: "Material",
      ui:{
        description: "The material to display on the surface of the corridor."
      },
      defaultValue: "solid white",
    },{
      name: "outline",
      dataType: "Boolean",
      ui:{
        description: "Whether or not the corridor is outlined."
      },
    },{
      name: "outlineColor",
      dataType: "Color",
      ui:{
        description: "The color of the corridor outline."
      },
      defaultValue: "black",
    },{
      name: "outlineWidth",
      dataType: "Double",
      ui:{
        description: "The width of the corridor outline."
      },
    },{
      name: "shadows",
      dataType: "ShadowMode",
      ui:{
        description: "Whether or not the corridor casts or receives shadows."
      },
      defaultValue: "DISABLED",
    },{
      name: "distanceDisplayCondition",
      dataType: "DistanceDisplayCondition",
      ui:{
        description: "The display condition specifying the distance from the camera at which this corridor will be displayed."
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
        description: "The z-index of the corridor, used for ordering ground geometry. Only has an effect if the corridor is constant, and `height` and `extrudedHeight` are not specified."
      },
    },
  ],
  portsOut: [
    {
      name: "Corridor",
      dataType: "Corridor",
    },
  ],
  rule: (_show: any, _positions: any, _width: any, _height: any, _heightReference: any, _extrudedHeight: any, _extrudedHeightReference: any, _cornerType: any, _granularity: any, _fill: any, _material: any, _outline: any, _outlineColor: any, _outlineWidth: any, _shadows: any, _distanceDisplayCondition: any, _classificationType: any, _zIndex: any) => {
    return packageSpreadValue(
      { _show, _positions, _width, _height, _heightReference, _extrudedHeight, _extrudedHeightReference, _cornerType, _granularity, _fill, _material, _outline, _outlineColor, _outlineWidth, _shadows, _distanceDisplayCondition, _classificationType, _zIndex }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "Corridor", ["show", "positions", "width", "height", "heightReference", "extrudedHeight", "extrudedHeightReference", "cornerType", "granularity", "fill", "material", "outline", "outlineColor", "outlineWidth", "shadows", "distanceDisplayCondition", "classificationType", "zIndex"]);
    return node;
  },
};

export default Corridor;