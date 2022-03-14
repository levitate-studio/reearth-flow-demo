import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Ellipse: LvtNodeDef = {
  _id: "Ellipse",
  ui: {
    title: "Ellipse",
    description: "An ellipse, which is a closed curve on or above the surface of the Earth.",
  },
  portsIn: [
    {
      name: "show",
      dataType: "Boolean",
      ui:{
        description: "Whether or not the ellipse is shown."
      },
      defaultValue: true,
    },{
      name: "semiMajorAxis",
      dataType: "Double",
      ui:{
        description: "The length of the ellipse's semi-major axis in meters."
      },
    },{
      name: "semiMinorAxis",
      dataType: "Double",
      ui:{
        description: "The length of the ellipse's semi-minor axis in meters."
      },
    },{
      name: "height",
      dataType: "Double",
      ui:{
        description: "The altitude of the ellipse relative to the surface."
      },
      defaultValue: 0.0,
    },{
      name: "heightReference",
      dataType: "HeightReference",
      ui:{
        description: "The height reference of the ellipse, which indicates if `height` is relative to terrain or not."
      },
    },{
      name: "extrudedHeight",
      dataType: "Double",
      ui:{
        description: "The altitude of the ellipse's extruded face relative to the surface."
      },
    },{
      name: "extrudedHeightReference",
      dataType: "HeightReference",
      ui:{
        description: "The extruded height reference of the ellipse, which indicates if `extrudedHeight` is relative to terrain or not."
      },
      defaultValue: "NONE",
    },{
      name: "rotation",
      dataType: "Double",
      ui:{
        description: "The angle from north (counter-clockwise) in radians."
      },
    },{
      name: "stRotation",
      dataType: "Double",
      ui:{
        description: "The rotation of any applied texture coordinates."
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
        description: "Whether or not the ellipse is filled."
      },
      defaultValue: true,
    },{
      name: "material",
      dataType: "Material",
      ui:{
        description: "The material to use to fill the ellipse."
      },
    },{
      name: "outline",
      dataType: "Boolean",
      ui:{
        description: "Whether or not the ellipse is outlined."
      },
      defaultValue: false,
    },{
      name: "outlineColor",
      dataType: "Color",
      ui:{
        description: "The color of the ellipse outline."
      },
    },{
      name: "outlineWidth",
      dataType: "Double",
      ui:{
        description: "The width of the ellipse outline."
      },
      defaultValue: 1.0,
    },{
      name: "numberOfVerticalLines",
      dataType: "Integer",
      ui:{
        description: "The number of vertical lines to use when outlining an extruded ellipse."
      },
    },{
      name: "shadows",
      dataType: "ShadowMode",
      ui:{
        description: "Whether or not the ellipse casts or receives shadows."
      },
      defaultValue: "DISABLED",
    },{
      name: "distanceDisplayCondition",
      dataType: "DistanceDisplayCondition",
      ui:{
        description: "The display condition specifying at what distance from the camera this ellipse will be displayed."
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
        description: "The z-index of the ellipse, used for ordering ground geometry. Only has an effect if the ellipse is constant, and `height` and `extrudedHeight` are not specified."
      },
    },
  ],
  portsOut: [
    {
      name: "Ellipse",
      dataType: "Ellipse",
    },
  ],
  rule: (_show: any, _semiMajorAxis: any, _semiMinorAxis: any, _height: any, _heightReference: any, _extrudedHeight: any, _extrudedHeightReference: any, _rotation: any, _stRotation: any, _granularity: any, _fill: any, _material: any, _outline: any, _outlineColor: any, _outlineWidth: any, _numberOfVerticalLines: any, _shadows: any, _distanceDisplayCondition: any, _classificationType: any, _zIndex: any) => {
    return packageSpreadValue(
      { _show, _semiMajorAxis, _semiMinorAxis, _height, _heightReference, _extrudedHeight, _extrudedHeightReference, _rotation, _stRotation, _granularity, _fill, _material, _outline, _outlineColor, _outlineWidth, _numberOfVerticalLines, _shadows, _distanceDisplayCondition, _classificationType, _zIndex }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "Ellipse", ["show", "semiMajorAxis", "semiMinorAxis", "height", "heightReference", "extrudedHeight", "extrudedHeightReference", "rotation", "stRotation", "granularity", "fill", "material", "outline", "outlineColor", "outlineWidth", "numberOfVerticalLines", "shadows", "distanceDisplayCondition", "classificationType", "zIndex"]);
    return node;
  },
};

export default Ellipse;