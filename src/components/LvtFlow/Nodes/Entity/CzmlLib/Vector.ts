import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Vector: LvtNodeDef = {
  _id: "Vector",
  ui: {
    title: "Vector",
    description: "Defines a graphical vector that originates at the `position` property and extends in the provided direction for the provided length.",
  },
  portsIn: [
    {
      name: "show",
      dataType: "Boolean",
      ui:{
        description: "Whether or not the vector is shown."
      },
    },{
      name: "color",
      dataType: "Color",
      ui:{
        description: "The color of the vector."
      },
    },{
      name: "direction",
      dataType: "Direction",
      ui:{
        description: "The direction of the vector."
      },
    },{
      name: "length",
      dataType: "Double",
      ui:{
        description: "The graphical length of the vector, in meters."
      },
    },{
      name: "minimumLengthInPixels",
      dataType: "Double",
      ui:{
        description: "The minimum graphical length of the vector in pixels."
      },
    },
  ],
  portsOut: [
    {
      name: "Vector",
      dataType: "Vector",
    },
  ],
  rule: (_show: any, _color: any, _direction: any, _length: any, _minimumLengthInPixels: any) => {
    return packageSpreadValue(
      { _show, _color, _direction, _length, _minimumLengthInPixels }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "Vector", ["show", "color", "direction", "length", "minimumLengthInPixels"]);
    return node;
  },
};

export default Vector;