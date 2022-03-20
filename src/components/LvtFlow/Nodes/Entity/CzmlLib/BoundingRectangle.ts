import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const BoundingRectangle: LvtNodeDef = {
  _id: "BoundingRectangle",
  ui: {
    title: "BoundingRectangle",
    description: "A bounding rectangle specified by a corner, width and height.",
  },
  portsIn: [
    {
      name: "boundingRectangle",
      dataType: "BoundingRectangleValue",
      ui:{
        description: "The bounding rectangle specified as `[X, Y, Width, Height]`."
      },
    },{
      name: "reference",
      dataType: "ReferenceValue",
      ui:{
        description: "The bounding rectangle specified as a reference to another property."
      },
    },
  ],
  portsOut: [
    {
      name: "BoundingRectangle",
      dataType: "BoundingRectangle",
    },
  ],
  rule: (_boundingRectangle: any, _reference: any) => {
    return packageSpreadValue(
      { _boundingRectangle, _reference }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "BoundingRectangle", ["boundingRectangle", "reference"]);
    return node;
  },
};

export default BoundingRectangle;