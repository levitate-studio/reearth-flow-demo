import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const CleanCoordsOptions: LvtNodeDef = {
  _id: "CleanCoordsOptions",
  ui: {
    title: "CleanCoordsOptions",
    description: "Options of CleanCoords",
  },
  portsIn: [
    {
      name: "mutate",
      dataType: "boolean",
    },
  ],
  portsOut: [
    {
      name: "CleanCoordsOptions",
      dataType: "object",
    },
  ],
  rule: (_mutate: any) => {
    return packageSpreadValue(
      { _mutate }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "CleanCoordsOptions", ["mutate"]);
    return node;
  },
};

export default CleanCoordsOptions;