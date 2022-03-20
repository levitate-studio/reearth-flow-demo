import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const VerticalOrigin: LvtNodeDef = {
  _id: "VerticalOrigin",
  ui: {
    title: "VerticalOrigin",
    description: "The vertical origin of an element, which can optionally vary over time. It controls whether the element is bottom-, center-, or top-aligned with the `position`.",
  },
  portsIn: [
    {
      name: "verticalOrigin",
      dataType: "VerticalOriginValue",
      ui:{
        description: "The vertical origin."
      },
    },{
      name: "reference",
      dataType: "ReferenceValue",
      ui:{
        description: "The vertical origin specified as a reference to another property."
      },
    },
  ],
  portsOut: [
    {
      name: "VerticalOrigin",
      dataType: "VerticalOrigin",
    },
  ],
  rule: (_verticalOrigin: any, _reference: any) => {
    return packageSpreadValue(
      { _verticalOrigin, _reference }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "VerticalOrigin", ["verticalOrigin", "reference"]);
    return node;
  },
};

export default VerticalOrigin;