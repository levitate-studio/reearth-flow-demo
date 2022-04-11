import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const ToWgs84Options: LvtNodeDef = {
  _id: "ToWgs84Options",
  ui: {
    title: "ToWgs84Options",
    description: "Options of ToWgs84",
  },
  portsIn: [
    {
      name: "mutate",
      dataType: "boolean",
    },
  ],
  portsOut: [
    {
      name: "ToWgs84Options",
      dataType: "object",
    },
  ],
  rule: (_mutate: any) => {
    return packageSpreadValue(
      { _mutate }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "ToWgs84Options", ["mutate"]);
    return node;
  },
};

export default ToWgs84Options;