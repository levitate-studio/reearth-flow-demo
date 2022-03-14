import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Wall: LvtNodeDef = {
  _id: "Wall",
  ui: {
    title: "Wall",
    description: "A two-dimensional wall defined as a line strip and optional maximum and minimum heights, which conforms to the curvature of the globe and can be placed along the surface or at altitude.",
  },
  portsIn: [
    {
      name: "show",
      dataType: "Boolean",
      ui:{
        description: "Whether or not the wall is shown."
      },
      defaultValue: true,
    },{
      name: "positions",
      dataType: "PositionList",
      ui:{
        description: "The array of positions defining the centerline of the wall."
      },
    },{
      name: "minimumHeights",
      dataType: "DoubleList",
      ui:{
        description: "The list of heights to be used for the bottom of the wall, instead of the surface."
      },
    },{
      name: "maximumHeights",
      dataType: "DoubleList",
      ui:{
        description: "The list of heights to be used for the top of the wall, instead of the height of each position."
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
        description: "Whether or not the wall is filled."
      },
    },{
      name: "material",
      dataType: "Material",
      ui:{
        description: "The material to display on the surface of the wall."
      },
      defaultValue: "solid white",
    },{
      name: "outline",
      dataType: "Boolean",
      ui:{
        description: "Whether or not the wall is outlined."
      },
    },{
      name: "outlineColor",
      dataType: "Color",
      ui:{
        description: "The color of the wall outline."
      },
      defaultValue: "black",
    },{
      name: "outlineWidth",
      dataType: "Double",
      ui:{
        description: "The width of the wall outline."
      },
    },{
      name: "shadows",
      dataType: "ShadowMode",
      ui:{
        description: "Whether or not the wall casts or receives shadows."
      },
      defaultValue: "DISABLED",
    },{
      name: "distanceDisplayCondition",
      dataType: "DistanceDisplayCondition",
      ui:{
        description: "The display condition specifying at what distance from the camera this wall will be displayed."
      },
    },
  ],
  portsOut: [
    {
      name: "Wall",
      dataType: "Wall",
    },
  ],
  rule: (_show: any, _positions: any, _minimumHeights: any, _maximumHeights: any, _granularity: any, _fill: any, _material: any, _outline: any, _outlineColor: any, _outlineWidth: any, _shadows: any, _distanceDisplayCondition: any) => {
    return packageSpreadValue(
      { _show, _positions, _minimumHeights, _maximumHeights, _granularity, _fill, _material, _outline, _outlineColor, _outlineWidth, _shadows, _distanceDisplayCondition }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "Wall", ["show", "positions", "minimumHeights", "maximumHeights", "granularity", "fill", "material", "outline", "outlineColor", "outlineWidth", "shadows", "distanceDisplayCondition"]);
    return node;
  },
};

export default Wall;