import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const ArcType: LvtNodeDef = {
  _id: "ArcType",
  ui: {
    title: "ArcType",
    description: "The type of an arc.",
  },
  portsIn: [
    {
      name: "arcType",
      dataType: "ArcTypeValue",
      ui:{
        description: "The arc type."
      },
    },{
      name: "reference",
      dataType: "ReferenceValue",
      ui:{
        description: "The arc type specified as a reference to another property."
      },
    },
  ],
  portsOut: [
    {
      name: "ArcType",
      dataType: "ArcType",
    },
  ],
  rule: (_arcType: any, _reference: any) => {
    return packageSpreadValue(
      { _arcType, _reference }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "ArcType", ["arcType", "reference"]);
    return node;
  },
};

export default ArcType;