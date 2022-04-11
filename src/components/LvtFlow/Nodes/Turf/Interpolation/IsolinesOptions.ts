import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const IsolinesOptions: LvtNodeDef = {
  _id: "IsolinesOptions",
  ui: {
    title: "IsolinesOptions",
    description: "Options of Isolines",
  },
  portsIn: [
    {
      name: "zProperty",
      dataType: "string",
    },{
      name: "commonProperties",
      dataType: "Object",
    },{
      name: "breaksProperties",
      dataType: "Array <Object>",
    },
  ],
  portsOut: [
    {
      name: "IsolinesOptions",
      dataType: "object",
    },
  ],
  rule: (_zProperty: any, _commonProperties: any, _breaksProperties: any) => {
    return packageSpreadValue(
      { _zProperty, _commonProperties, _breaksProperties }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "IsolinesOptions", ["zProperty", "commonProperties", "breaksProperties"]);
    return node;
  },
};

export default IsolinesOptions;