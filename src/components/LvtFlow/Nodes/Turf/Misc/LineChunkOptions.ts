import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const LineChunkOptions: LvtNodeDef = {
  _id: "LineChunkOptions",
  ui: {
    title: "LineChunkOptions",
    description: "Options of LineChunk",
  },
  portsIn: [
    {
      name: "units",
      dataType: "string",
    },{
      name: "reverse",
      dataType: "boolean",
    },
  ],
  portsOut: [
    {
      name: "LineChunkOptions",
      dataType: "object",
    },
  ],
  rule: (_units: any, _reverse: any) => {
    return packageSpreadValue(
      { _units, _reverse }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "LineChunkOptions", ["units", "reverse"]);
    return node;
  },
};

export default LineChunkOptions;