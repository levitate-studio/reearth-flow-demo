import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const ShadowMode: LvtNodeDef = {
  _id: "ShadowMode",
  ui: {
    title: "ShadowMode",
    description: "Whether or not an object casts or receives shadows from each light source when shadows are enabled.",
  },
  portsIn: [
    {
      name: "shadowMode",
      dataType: "ShadowModeValue",
      ui:{
        description: "The shadow mode."
      },
    },{
      name: "reference",
      dataType: "ReferenceValue",
      ui:{
        description: "The shadow mode specified as a reference to another property."
      },
    },
  ],
  portsOut: [
    {
      name: "ShadowMode",
      dataType: "ShadowMode",
    },
  ],
  rule: (_shadowMode: any, _reference: any) => {
    return packageSpreadValue(
      { _shadowMode, _reference }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "ShadowMode", ["shadowMode", "reference"]);
    return node;
  },
};

export default ShadowMode;