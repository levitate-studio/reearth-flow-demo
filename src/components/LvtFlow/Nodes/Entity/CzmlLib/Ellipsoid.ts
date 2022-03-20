import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Ellipsoid: LvtNodeDef = {
  _id: "Ellipsoid",
  ui: {
    title: "Ellipsoid",
    description: "A closed quadric surface that is a three-dimensional analogue of an ellipse.",
  },
  portsIn: [
    {
      name: "show",
      dataType: "Boolean",
      ui:{
        description: "Whether or not the ellipsoid is shown."
      },
    },{
      name: "radii",
      dataType: "EllipsoidRadii",
      ui:{
        description: "The radii of the ellipsoid."
      },
    },{
      name: "innerRadii",
      dataType: "EllipsoidRadii",
      ui:{
        description: "The inner radii of the ellipsoid."
      },
    },{
      name: "minimumClock",
      dataType: "Double",
      ui:{
        description: "The minimum clock angle of the ellipsoid."
      },
    },{
      name: "maximumClock",
      dataType: "Double",
      ui:{
        description: "The maximum clock angle of the ellipsoid."
      },
    },{
      name: "minimumCone",
      dataType: "Double",
      ui:{
        description: "The minimum cone angle of the ellipsoid."
      },
    },{
      name: "maximumCone",
      dataType: "Double",
      ui:{
        description: "The maximum cone angle of the ellipsoid."
      },
    },{
      name: "heightReference",
      dataType: "HeightReference",
      ui:{
        description: "The height reference of the ellipsoid, which indicates if the position is relative to terrain or not."
      },
    },{
      name: "fill",
      dataType: "Boolean",
      ui:{
        description: "Whether or not the ellipsoid is filled."
      },
    },{
      name: "material",
      dataType: "Material",
      ui:{
        description: "The material to display on the surface of the ellipsoid."
      },
    },{
      name: "outline",
      dataType: "Boolean",
      ui:{
        description: "Whether or not the ellipsoid is outlined."
      },
    },{
      name: "outlineColor",
      dataType: "Color",
      ui:{
        description: "The color of the ellipsoid outline."
      },
    },{
      name: "outlineWidth",
      dataType: "Double",
      ui:{
        description: "The width of the ellipsoid outline."
      },
    },{
      name: "stackPartitions",
      dataType: "Integer",
      ui:{
        description: "The number of times to partition the ellipsoid into stacks."
      },
    },{
      name: "slicePartitions",
      dataType: "Integer",
      ui:{
        description: "The number of times to partition the ellipsoid into radial slices."
      },
    },{
      name: "subdivisions",
      dataType: "Integer",
      ui:{
        description: "The number of samples per outline ring, determining the granularity of the curvature."
      },
    },{
      name: "shadows",
      dataType: "ShadowMode",
      ui:{
        description: "Whether or not the ellipsoid casts or receives shadows."
      },
    },{
      name: "distanceDisplayCondition",
      dataType: "DistanceDisplayCondition",
      ui:{
        description: "The display condition specifying at what distance from the camera this ellipsoid will be displayed."
      },
    },
  ],
  portsOut: [
    {
      name: "Ellipsoid",
      dataType: "Ellipsoid",
    },
  ],
  rule: (_show: any, _radii: any, _innerRadii: any, _minimumClock: any, _maximumClock: any, _minimumCone: any, _maximumCone: any, _heightReference: any, _fill: any, _material: any, _outline: any, _outlineColor: any, _outlineWidth: any, _stackPartitions: any, _slicePartitions: any, _subdivisions: any, _shadows: any, _distanceDisplayCondition: any) => {
    return packageSpreadValue(
      { _show, _radii, _innerRadii, _minimumClock, _maximumClock, _minimumCone, _maximumCone, _heightReference, _fill, _material, _outline, _outlineColor, _outlineWidth, _stackPartitions, _slicePartitions, _subdivisions, _shadows, _distanceDisplayCondition }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "Ellipsoid", ["show", "radii", "innerRadii", "minimumClock", "maximumClock", "minimumCone", "maximumCone", "heightReference", "fill", "material", "outline", "outlineColor", "outlineWidth", "stackPartitions", "slicePartitions", "subdivisions", "shadows", "distanceDisplayCondition"]);
    return node;
  },
};

export default Ellipsoid;