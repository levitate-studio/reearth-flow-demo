import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const PolylineVolume: LvtNodeDef = {
  _id: "PolylineVolume",
  ui: {
    title: "PolylineVolume",
    description: "A polyline with a volume, defined as a 2D shape extruded along a polyline that conforms to the curvature of the globe.",
  },
  portsIn: [
    {
      name: "show",
      dataType: "Boolean",
      ui:{
        description: "Whether or not the volume is shown."
      },
    },{
      name: "positions",
      dataType: "PositionList",
      ui:{
        description: "The array of positions defining the center of the polyline volume."
      },
    },{
      name: "shape",
      dataType: "Shape",
      ui:{
        description: "The array of positions defining the shape of the volume to be extruded."
      },
    },{
      name: "cornerType",
      dataType: "CornerType",
      ui:{
        description: "The style of the corners of the volume."
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
        description: "Whether or not the volume is filled."
      },
    },{
      name: "material",
      dataType: "Material",
      ui:{
        description: "The material to use to fill the volume."
      },
    },{
      name: "outline",
      dataType: "Boolean",
      ui:{
        description: "Whether or not the volume is outlined."
      },
    },{
      name: "outlineColor",
      dataType: "Color",
      ui:{
        description: "The color of the volume outline."
      },
    },{
      name: "outlineWidth",
      dataType: "Double",
      ui:{
        description: "The width of the volume outline."
      },
    },{
      name: "shadows",
      dataType: "ShadowMode",
      ui:{
        description: "Whether or not the volume casts or receives shadows."
      },
    },{
      name: "distanceDisplayCondition",
      dataType: "DistanceDisplayCondition",
      ui:{
        description: "The display condition specifying the distance from the camera at which this volume will be displayed."
      },
    },
  ],
  portsOut: [
    {
      name: "PolylineVolume",
      dataType: "PolylineVolume",
    },
  ],
  rule: (_show: any, _positions: any, _shape: any, _cornerType: any, _granularity: any, _fill: any, _material: any, _outline: any, _outlineColor: any, _outlineWidth: any, _shadows: any, _distanceDisplayCondition: any) => {
    return packageSpreadValue(
      { _show, _positions, _shape, _cornerType, _granularity, _fill, _material, _outline, _outlineColor, _outlineWidth, _shadows, _distanceDisplayCondition }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "PolylineVolume", ["show", "positions", "shape", "cornerType", "granularity", "fill", "material", "outline", "outlineColor", "outlineWidth", "shadows", "distanceDisplayCondition"]);
    return node;
  },
};

export default PolylineVolume;