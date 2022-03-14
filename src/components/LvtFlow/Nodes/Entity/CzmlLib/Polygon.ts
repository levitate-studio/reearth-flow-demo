import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Polygon: LvtNodeDef = {
  _id: "Polygon",
  ui: {
    title: "Polygon",
    description: "A polygon, which is a closed figure on the surface of the Earth.",
  },
  portsIn: [
    {
      name: "show",
      dataType: "Boolean",
      ui:{
        description: "Whether or not the polygon is shown."
      },
      defaultValue: true,
    },{
      name: "positions",
      dataType: "PositionList",
      ui:{
        description: "The array of positions defining a simple polygon."
      },
    },{
      name: "holes",
      dataType: "PositionListOfLists",
      ui:{
        description: "The array of arrays of positions defining holes in the polygon."
      },
    },{
      name: "arcType",
      dataType: "ArcType",
      ui:{
        description: "The type of arc that should connect the positions of the polygon."
      },
      defaultValue: "GEODESIC",
    },{
      name: "height",
      dataType: "Double",
      ui:{
        description: "The height of the polygon when `perPositionHeight` is false."
      },
    },{
      name: "heightReference",
      dataType: "HeightReference",
      ui:{
        description: "The height reference of the polygon, which indicates if `height` is relative to terrain or not."
      },
      defaultValue: "NONE",
    },{
      name: "extrudedHeight",
      dataType: "Double",
      ui:{
        description: "The extruded height of the polygon."
      },
    },{
      name: "extrudedHeightReference",
      dataType: "HeightReference",
      ui:{
        description: "The extruded height reference of the polygon, which indicates if `extrudedHeight` is relative to terrain or not."
      },
      defaultValue: "NONE",
    },{
      name: "stRotation",
      dataType: "Double",
      ui:{
        description: "The rotation of any applied texture. A positive rotation is counter-clockwise."
      },
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
        description: "Whether or not the polygon is filled."
      },
    },{
      name: "material",
      dataType: "Material",
      ui:{
        description: "The material to use to fill the polygon."
      },
      defaultValue: "solid white",
    },{
      name: "outline",
      dataType: "Boolean",
      ui:{
        description: "Whether or not the polygon is outlined."
      },
    },{
      name: "outlineColor",
      dataType: "Color",
      ui:{
        description: "The color of the polygon outline."
      },
      defaultValue: "black",
    },{
      name: "outlineWidth",
      dataType: "Double",
      ui:{
        description: "The width of the polygon outline."
      },
    },{
      name: "perPositionHeight",
      dataType: "Boolean",
      ui:{
        description: "Whether to use the height of each position to define the polygon or to use `height` as a constant height above the surface."
      },
      defaultValue: false,
    },{
      name: "closeTop",
      dataType: "Boolean",
      ui:{
        description: "Whether to close the top of the polygon."
      },
    },{
      name: "closeBottom",
      dataType: "Boolean",
      ui:{
        description: "Whether to close the bottom of the polygon."
      },
      defaultValue: true,
    },{
      name: "shadows",
      dataType: "ShadowMode",
      ui:{
        description: "Whether or not the polygon casts or receives shadows."
      },
    },{
      name: "distanceDisplayCondition",
      dataType: "DistanceDisplayCondition",
      ui:{
        description: "The display condition specifying the distance from the camera at which this polygon will be displayed."
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
        description: "The z-index of the polygon, used for ordering ground geometry. Only has an effect if the polygon is constant, and `height` and `extrudedHeight` are not specified."
      },
    },
  ],
  portsOut: [
    {
      name: "Polygon",
      dataType: "Polygon",
    },
  ],
  rule: (_show: any, _positions: any, _holes: any, _arcType: any, _height: any, _heightReference: any, _extrudedHeight: any, _extrudedHeightReference: any, _stRotation: any, _granularity: any, _fill: any, _material: any, _outline: any, _outlineColor: any, _outlineWidth: any, _perPositionHeight: any, _closeTop: any, _closeBottom: any, _shadows: any, _distanceDisplayCondition: any, _classificationType: any, _zIndex: any) => {
    return packageSpreadValue(
      { _show, _positions, _holes, _arcType, _height, _heightReference, _extrudedHeight, _extrudedHeightReference, _stRotation, _granularity, _fill, _material, _outline, _outlineColor, _outlineWidth, _perPositionHeight, _closeTop, _closeBottom, _shadows, _distanceDisplayCondition, _classificationType, _zIndex }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "Polygon", ["show", "positions", "holes", "arcType", "height", "heightReference", "extrudedHeight", "extrudedHeightReference", "stRotation", "granularity", "fill", "material", "outline", "outlineColor", "outlineWidth", "perPositionHeight", "closeTop", "closeBottom", "shadows", "distanceDisplayCondition", "classificationType", "zIndex"]);
    return node;
  },
};

export default Polygon;