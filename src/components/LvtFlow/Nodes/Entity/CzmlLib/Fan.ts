import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Fan: LvtNodeDef = {
  _id: "Fan",
  ui: {
    title: "Fan",
    description: "A fan, which starts at a point or apex and extends in a specified list of directions from the apex. Each pair of directions forms a face of the fan extending to the specified radius.",
  },
  portsIn: [
    {
      name: "show",
      dataType: "Boolean",
      ui:{
        description: "Whether or not the fan is shown."
      },
    },{
      name: "directions",
      dataType: "DirectionList",
      ui:{
        description: "The list of directions defining the fan."
      },
    },{
      name: "radius",
      dataType: "Double",
      ui:{
        description: "The radial limit of the fan. If `perDirectionRadius` is false, then this value is required."
      },
    },{
      name: "perDirectionRadius",
      dataType: "Boolean",
      ui:{
        description: "Whether the magnitude of each direction is used instead of a constant radius."
      },
    },{
      name: "material",
      dataType: "Material",
      ui:{
        description: "The material to display on the surface of the fan."
      },
    },{
      name: "fill",
      dataType: "Boolean",
      ui:{
        description: "Whether or not the fan is filled."
      },
    },{
      name: "outline",
      dataType: "Boolean",
      ui:{
        description: "Whether or not the fan is outlined."
      },
    },{
      name: "outlineColor",
      dataType: "Color",
      ui:{
        description: "The color of the fan outline."
      },
    },{
      name: "outlineWidth",
      dataType: "Double",
      ui:{
        description: "The width of the fan outline."
      },
    },{
      name: "numberOfRings",
      dataType: "Integer",
      ui:{
        description: "The number of outline rings to draw, starting from the outer edge and equidistantly spaced towards the center."
      },
    },
  ],
  portsOut: [
    {
      name: "Fan",
      dataType: "Fan",
    },
  ],
  rule: (_show: any, _directions: any, _radius: any, _perDirectionRadius: any, _material: any, _fill: any, _outline: any, _outlineColor: any, _outlineWidth: any, _numberOfRings: any) => {
    return packageSpreadValue(
      { _show, _directions, _radius, _perDirectionRadius, _material, _fill, _outline, _outlineColor, _outlineWidth, _numberOfRings }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "Fan", ["show", "directions", "radius", "perDirectionRadius", "material", "fill", "outline", "outlineColor", "outlineWidth", "numberOfRings"]);
    return node;
  },
};

export default Fan;