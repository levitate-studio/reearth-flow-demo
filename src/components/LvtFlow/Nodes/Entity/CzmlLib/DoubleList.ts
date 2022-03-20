import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const DoubleList: LvtNodeDef = {
  _id: "DoubleList",
  ui: {
    title: "DoubleList",
    description: "A list of floating-point numbers.",
  },
  portsIn: [
    {
      name: "array",
      dataType: "DoubleListValue",
      ui:{
        description: "The list of values specified as an array of numbers."
      },
    },{
      name: "references",
      dataType: "ReferenceListValue",
      ui:{
        description: "The list of values specified as references. Each reference is to a property that defines a single value, which may change with time."
      },
    },
  ],
  portsOut: [
    {
      name: "DoubleList",
      dataType: "DoubleList",
    },
  ],
  rule: (_array: any, _references: any) => {
    return packageSpreadValue(
      { _array, _references }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "DoubleList", ["array", "references"]);
    return node;
  },
};

export default DoubleList;