import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const CenterOfMassOptions: LvtNodeDef = {
  _id: "CenterOfMassOptions",
  ui: {
    title: "CenterOfMassOptions",
    description: "Options of CenterOfMass",
  },
  portsIn: [
    {
      name: "properties",
      dataType: "Object",
    },
  ],
  portsOut: [
    {
      name: "CenterOfMassOptions",
      dataType: "object",
    },
  ],
  rule: (_properties: any) => {
    return packageSpreadValue(
      { _properties }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "CenterOfMassOptions", ["properties"]);
    return node;
  },
};

export default CenterOfMassOptions;