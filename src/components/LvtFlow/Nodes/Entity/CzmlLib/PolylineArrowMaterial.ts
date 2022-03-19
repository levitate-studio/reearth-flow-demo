import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const PolylineArrowMaterial: LvtNodeDef = {
  _id: "PolylineArrowMaterial",
  ui: {
    title: "PolylineArrowMaterial",
    description: "A material that fills the surface of a line with an arrow.",
  },
  portsIn: [
    {
      name: "color",
      dataType: "Color",
      ui:{
        description: "The color of the surface."
      },
    },
  ],
  portsOut: [
    {
      name: "PolylineArrowMaterial",
      dataType: "PolylineArrowMaterial",
    },
  ],
  rule: (_color: any) => {
    return packageSpreadValue(
      { _color }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "PolylineArrowMaterial", ["color"]);
    return node;
  },
};

export default PolylineArrowMaterial;