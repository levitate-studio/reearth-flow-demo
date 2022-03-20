import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Uri: LvtNodeDef = {
  _id: "Uri",
  ui: {
    title: "Uri",
    description: "A URI value. The URI can optionally vary with time.",
  },
  portsIn: [
    {
      name: "uri",
      dataType: "UriValue",
      ui:{
        description: "The URI value."
      },
    },{
      name: "reference",
      dataType: "ReferenceValue",
      ui:{
        description: "The URI specified as a reference to another property."
      },
    },
  ],
  portsOut: [
    {
      name: "Uri",
      dataType: "Uri",
    },
  ],
  rule: (_uri: any, _reference: any) => {
    return packageSpreadValue(
      { _uri, _reference }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "Uri", ["uri", "reference"]);
    return node;
  },
};

export default Uri;