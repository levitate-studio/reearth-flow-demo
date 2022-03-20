import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const CornerType: LvtNodeDef = {
  _id: "CornerType",
  ui: {
    title: "CornerType",
    description: "The style of a corner.",
  },
  portsIn: [
    {
      name: "cornerType",
      dataType: "CornerTypeValue",
      ui:{
        description: "The corner style."
      },
    },{
      name: "reference",
      dataType: "ReferenceValue",
      ui:{
        description: "The corner style specified as a reference to another property."
      },
    },
  ],
  portsOut: [
    {
      name: "CornerType",
      dataType: "CornerType",
    },
  ],
  rule: (_cornerType: any, _reference: any) => {
    return packageSpreadValue(
      { _cornerType, _reference }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "CornerType", ["cornerType", "reference"]);
    return node;
  },
};

export default CornerType;