import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const TransformTranslateOptions: LvtNodeDef = {
  _id: "TransformTranslateOptions",
  ui: {
    title: "TransformTranslateOptions",
    description: "Options of TransformTranslate",
  },
  portsIn: [
    {
      name: "units",
      dataType: "string",
    },{
      name: "zTranslation",
      dataType: "number",
    },{
      name: "mutate",
      dataType: "boolean",
    },
  ],
  portsOut: [
    {
      name: "TransformTranslateOptions",
      dataType: "object",
    },
  ],
  rule: (_units: any, _zTranslation: any, _mutate: any) => {
    return packageSpreadValue(
      { _units, _zTranslation, _mutate }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "TransformTranslateOptions", ["units", "zTranslation", "mutate"]);
    return node;
  },
};

export default TransformTranslateOptions;