import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Polyline: LvtNodeDef = {
  _id: "Polyline",
  ui: {
    title: "Polyline",
    description: "A polyline, which is a line in the scene composed of multiple segments.",
  },
  portsIn: [
    {
      name: "show",
      dataType: "Boolean",
      ui:{
        description: "Whether or not the polyline is shown."
      },
      defaultValue: true,
    },{
      name: "positions",
      dataType: "PositionList",
      ui:{
        description: "The array of positions defining the polyline as a line strip."
      },
    },{
      name: "arcType",
      dataType: "ArcType",
      ui:{
        description: "The type of arc that should connect the positions of the polyline."
      },
      defaultValue: "GEODESIC",
    },{
      name: "width",
      dataType: "Double",
      ui:{
        description: "The width of the polyline."
      },
    },{
      name: "granularity",
      dataType: "Double",
      ui:{
        description: "The sampling distance, in radians."
      },
      defaultValue: "π / 180.0",
    },{
      name: "material",
      dataType: "PolylineMaterial",
      ui:{
        description: "The material to use to draw the polyline."
      },
    },{
      name: "followSurface",
      dataType: "Boolean",
      ui:{
        description: "Whether or not the positions are connected as great arcs (the default) or as straight lines. This property has been superseded by `arcType`, which should be used instead."
      },
      defaultValue: true,
    },{
      name: "shadows",
      dataType: "ShadowMode",
      ui:{
        description: "Whether or not the polyline casts or receives shadows."
      },
    },{
      name: "depthFailMaterial",
      dataType: "PolylineMaterial",
      ui:{
        description: "The material to use to draw the polyline when it is below the terrain."
      },
    },{
      name: "distanceDisplayCondition",
      dataType: "DistanceDisplayCondition",
      ui:{
        description: "The display condition specifying at what distance from the camera this polyline will be displayed."
      },
    },{
      name: "clampToGround",
      dataType: "Boolean",
      ui:{
        description: "Whether or not the polyline should be clamped to the ground."
      },
      defaultValue: false,
    },{
      name: "classificationType",
      dataType: "ClassificationType",
      ui:{
        description: "Whether a classification affects terrain, 3D Tiles, or both."
      },
    },{
      name: "zIndex",
      dataType: "Integer",
      ui:{
        description: "The z-index of the polyline, used for ordering ground geometry. Only has an effect if the polyline is constant, and `clampToGround` is true."
      },
      defaultValue: 0,
    },
  ],
  portsOut: [
    {
      name: "Polyline",
      dataType: "Polyline",
    },
  ],
  rule: (_show: any, _positions: any, _arcType: any, _width: any, _granularity: any, _material: any, _followSurface: any, _shadows: any, _depthFailMaterial: any, _distanceDisplayCondition: any, _clampToGround: any, _classificationType: any, _zIndex: any) => {
    return packageSpreadValue(
      { _show, _positions, _arcType, _width, _granularity, _material, _followSurface, _shadows, _depthFailMaterial, _distanceDisplayCondition, _clampToGround, _classificationType, _zIndex }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "Polyline", ["show", "positions", "arcType", "width", "granularity", "material", "followSurface", "shadows", "depthFailMaterial", "distanceDisplayCondition", "clampToGround", "classificationType", "zIndex"]);
    return node;
  },
};

export default Polyline;