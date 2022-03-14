import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const PixelOffset: LvtNodeDef = {
  _id: "PixelOffset",
  ui: {
    title: "PixelOffset",
    description: "A pixel offset in viewport coordinates. A pixel offset is the number of pixels up and to the right to place an element relative to an origin.",
  },
  portsIn: [
    {
      name: "cartesian2",
      dataType: "Cartesian2Value",
      ui:{
        description: "The pixel offset specified as a two-dimensional Cartesian value `[X, Y]`, in viewport coordinates in pixels, where X is pixels to the right and Y is pixels up."
      },
    },{
      name: "reference",
      dataType: "ReferenceValue",
      ui:{
        description: "The pixel offset specified as a reference to another property."
      },
    },
  ],
  portsOut: [
    {
      name: "PixelOffset",
      dataType: "PixelOffset",
    },
  ],
  rule: (_cartesian2: any, _reference: any) => {
    return packageSpreadValue(
      { _cartesian2, _reference }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "PixelOffset", ["cartesian2", "reference"]);
    return node;
  },
};

export default PixelOffset;