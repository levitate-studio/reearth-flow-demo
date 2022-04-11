import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const IsobandsOptions: LvtNodeDef = {
  _id: "IsobandsOptions",
  ui: {
    title: "IsobandsOptions",
    description: "Options of Isobands",
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
      name: "IsobandsOptions",
      dataType: "object",
    },
  ],
  rule: (_zProperty: any, _commonProperties: any, _breaksProperties: any) => {
    return packageSpreadValue(
      { _zProperty, _commonProperties, _breaksProperties }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "IsobandsOptions", ["zProperty", "commonProperties", "breaksProperties"]);
    return node;
  },
};

export default IsobandsOptions;