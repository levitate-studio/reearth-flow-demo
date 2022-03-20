import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const ViewFrom: LvtNodeDef = {
  _id: "ViewFrom",
  ui: {
    title: "ViewFrom",
    description: "A suggested initial camera position offset when tracking this object, specified as a Cartesian position. Typically defined in the East (x), North (y), Up (z) reference frame relative to the object's position, but may use another frame depending on the object's velocity.",
  },
  portsIn: [
    {
      name: "cartesian",
      dataType: "Cartesian3Value",
      ui:{
        description: "The offset specified as a three-dimensional Cartesian value `[X, Y, Z]`."
      },
    },{
      name: "reference",
      dataType: "ReferenceValue",
      ui:{
        description: "The offset specified as a reference to another property."
      },
    },
  ],
  portsOut: [
    {
      name: "ViewFrom",
      dataType: "ViewFrom",
    },
  ],
  rule: (_cartesian: any, _reference: any) => {
    return packageSpreadValue(
      { _cartesian, _reference }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "ViewFrom", ["cartesian", "reference"]);
    return node;
  },
};

export default ViewFrom;