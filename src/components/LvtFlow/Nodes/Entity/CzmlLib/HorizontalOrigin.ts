import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const HorizontalOrigin: LvtNodeDef = {
  _id: "HorizontalOrigin",
  ui: {
    title: "HorizontalOrigin",
    description: "The horizontal origin of an element, which can optionally vary over time. It controls whether the element is left-, center-, or right-aligned with the `position`.",
  },
  portsIn: [
    {
      name: "horizontalOrigin",
      dataType: "HorizontalOriginValue",
      ui:{
        description: "The horizontal origin."
      },
    },{
      name: "reference",
      dataType: "ReferenceValue",
      ui:{
        description: "The horizontal origin specified as a reference to another property."
      },
    },
  ],
  portsOut: [
    {
      name: "HorizontalOrigin",
      dataType: "HorizontalOrigin",
    },
  ],
  rule: (_horizontalOrigin: any, _reference: any) => {
    return packageSpreadValue(
      { _horizontalOrigin, _reference }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "HorizontalOrigin", ["horizontalOrigin", "reference"]);
    return node;
  },
};

export default HorizontalOrigin;