import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const DissolveOptions: LvtNodeDef = {
  _id: "DissolveOptions",
  ui: {
    title: "DissolveOptions",
    description: "Options of Dissolve",
  },
  portsIn: [
    {
      name: "propertyName",
      dataType: "(string)",
    },
  ],
  portsOut: [
    {
      name: "DissolveOptions",
      dataType: "object",
    },
  ],
  rule: (_propertyName: any) => {
    return packageSpreadValue(
      { _propertyName }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "DissolveOptions", ["propertyName"]);
    return node;
  },
};

export default DissolveOptions;