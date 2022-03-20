import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const ClassificationType: LvtNodeDef = {
  _id: "ClassificationType",
  ui: {
    title: "ClassificationType",
    description: "Whether a classification affects terrain, 3D Tiles, or both.",
  },
  portsIn: [
    {
      name: "classificationType",
      dataType: "ClassificationTypeValue",
      ui:{
        description: "The classification type, which indicates whether a classification affects terrain, 3D Tiles, or both."
      },
    },{
      name: "reference",
      dataType: "ReferenceValue",
      ui:{
        description: "The classification type specified as a reference to another property."
      },
    },
  ],
  portsOut: [
    {
      name: "ClassificationType",
      dataType: "ClassificationType",
    },
  ],
  rule: (_classificationType: any, _reference: any) => {
    return packageSpreadValue(
      { _classificationType, _reference }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "ClassificationType", ["classificationType", "reference"]);
    return node;
  },
};

export default ClassificationType;