import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const BufferOptions: LvtNodeDef = {
  _id: "BufferOptions",
  ui: {
    title: "BufferOptions",
    description: "Options of Buffer",
  },
  portsIn: [
    {
      name: "units",
      dataType: "string",
    },{
      name: "steps",
      dataType: "number",
    },
  ],
  portsOut: [
    {
      name: "BufferOptions",
      dataType: "object",
    },
  ],
  rule: (_units: any, _steps: any) => {
    return packageSpreadValue(
      { _units, _steps }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "BufferOptions", ["units", "steps"]);
    return node;
  },
};

export default BufferOptions;