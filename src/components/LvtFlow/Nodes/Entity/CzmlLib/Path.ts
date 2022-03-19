import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Path: LvtNodeDef = {
  _id: "Path",
  ui: {
    title: "Path",
    description: "A path, which is a polyline defined by the motion of an object over time. The possible vertices of the path are specified by the `position` property. Note that because clients cannot render a truly infinite path, the path must be limited, either by defining availability for this object, or by using the `leadTime` and `trailTime` properties.",
  },
  portsIn: [
    {
      name: "show",
      dataType: "Boolean",
      ui:{
        description: "Whether or not the path is shown."
      },
    },{
      name: "leadTime",
      dataType: "Double",
      ui:{
        description: "The time ahead of the animation time, in seconds, to show the path. The time will be limited to not exceed the object's availability. By default, the value is unlimited, which effectively results in drawing the entire available path of the object."
      },
    },{
      name: "trailTime",
      dataType: "Double",
      ui:{
        description: "The time behind the animation time, in seconds, to show the path. The time will be limited to not exceed the object's availability. By default, the value is unlimited, which effectively results in drawing the entire available path of the object."
      },
    },{
      name: "width",
      dataType: "Double",
      ui:{
        description: "The width of the path line."
      },
    },{
      name: "resolution",
      dataType: "Double",
      ui:{
        description: "The maximum step-size, in seconds, used to sample the path. If the `position` property has data points farther apart than resolution specifies, additional samples will be computed, creating a smoother path."
      },
    },{
      name: "material",
      dataType: "PolylineMaterial",
      ui:{
        description: "The material to use to draw the path."
      },
    },{
      name: "distanceDisplayCondition",
      dataType: "DistanceDisplayCondition",
      ui:{
        description: "The display condition specifying at what distance from the camera this path will be displayed."
      },
    },
  ],
  portsOut: [
    {
      name: "Path",
      dataType: "Path",
    },
  ],
  rule: (_show: any, _leadTime: any, _trailTime: any, _width: any, _resolution: any, _material: any, _distanceDisplayCondition: any) => {
    return packageSpreadValue(
      { _show, _leadTime, _trailTime, _width, _resolution, _material, _distanceDisplayCondition }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "Path", ["show", "leadTime", "trailTime", "width", "resolution", "material", "distanceDisplayCondition"]);
    return node;
  },
};

export default Path;