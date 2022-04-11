import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const BooleanPointOnLineOptions: LvtNodeDef = {
  _id: "BooleanPointOnLineOptions",
  ui: {
    title: "BooleanPointOnLineOptions",
    description: "Options of BooleanPointOnLine",
  },
  portsIn: [
    {
      name: "ignoreEndVertices",
      dataType: "boolean",
    },{
      name: "epsilon",
      dataType: "(number)",
    },
  ],
  portsOut: [
    {
      name: "BooleanPointOnLineOptions",
      dataType: "object",
    },
  ],
  rule: (_ignoreEndVertices: any, _epsilon: any) => {
    return packageSpreadValue(
      { _ignoreEndVertices, _epsilon }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "BooleanPointOnLineOptions", ["ignoreEndVertices", "epsilon"]);
    return node;
  },
};

export default BooleanPointOnLineOptions;