import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Point: LvtNodeDef = {
  _id: "Point",
  ui: {
    title: "Point",
    description: "A point, or viewport-aligned circle.",
  },
  portsIn: [
    {
      name: "show",
      dataType: "Boolean",
      ui:{
        description: "Whether or not the point is shown."
      },
    },{
      name: "pixelSize",
      dataType: "Double",
      ui:{
        description: "The size of the point, in pixels."
      },
    },{
      name: "heightReference",
      dataType: "HeightReference",
      ui:{
        description: "The height reference of the point, which indicates if the position is relative to terrain or not."
      },
    },{
      name: "color",
      dataType: "Color",
      ui:{
        description: "The color of the point."
      },
    },{
      name: "outlineColor",
      dataType: "Color",
      ui:{
        description: "The color of the outline of the point."
      },
    },{
      name: "outlineWidth",
      dataType: "Double",
      ui:{
        description: "The width of the outline of the point."
      },
    },{
      name: "scaleByDistance",
      dataType: "NearFarScalar",
      ui:{
        description: "How the point's scale should change based on the point's distance from the camera. This scalar value will be multiplied by `pixelSize`."
      },
    },{
      name: "translucencyByDistance",
      dataType: "NearFarScalar",
      ui:{
        description: "How the point's translucency should change based on the point's distance from the camera. This scalar value should range from 0 to 1."
      },
    },{
      name: "distanceDisplayCondition",
      dataType: "DistanceDisplayCondition",
      ui:{
        description: "The display condition specifying the distance from the camera at which this point will be displayed."
      },
    },{
      name: "disableDepthTestDistance",
      dataType: "Double",
      ui:{
        description: "The distance from the camera at which to disable the depth test. This can be used to prevent clipping against terrain, for example. When set to zero, the depth test is always applied. When set to Infinity, the depth test is never applied."
      },
    },
  ],
  portsOut: [
    {
      name: "Point",
      dataType: "Point",
    },
  ],
  rule: (_show: any, _pixelSize: any, _heightReference: any, _color: any, _outlineColor: any, _outlineWidth: any, _scaleByDistance: any, _translucencyByDistance: any, _distanceDisplayCondition: any, _disableDepthTestDistance: any) => {
    return packageSpreadValue(
      { _show, _pixelSize, _heightReference, _color, _outlineColor, _outlineWidth, _scaleByDistance, _translucencyByDistance, _distanceDisplayCondition, _disableDepthTestDistance }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "Point", ["show", "pixelSize", "heightReference", "color", "outlineColor", "outlineWidth", "scaleByDistance", "translucencyByDistance", "distanceDisplayCondition", "disableDepthTestDistance"]);
    return node;
  },
};

export default Point;