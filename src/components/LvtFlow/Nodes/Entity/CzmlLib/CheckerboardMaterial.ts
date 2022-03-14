import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const CheckerboardMaterial: LvtNodeDef = {
  _id: "CheckerboardMaterial",
  ui: {
    title: "CheckerboardMaterial",
    description: "A material that fills the surface with a checkerboard pattern.",
  },
  portsIn: [
    {
      name: "evenColor",
      dataType: "Color",
      ui:{
        description: "The even color."
      },
      defaultValue: "white",
    },{
      name: "oddColor",
      dataType: "Color",
      ui:{
        description: "The odd color."
      },
    },{
      name: "repeat",
      dataType: "Repeat",
      ui:{
        description: "The number of times the tiles repeat along each axis."
      },
      defaultValue: [2, 2],
    },
  ],
  portsOut: [
    {
      name: "CheckerboardMaterial",
      dataType: "CheckerboardMaterial",
    },
  ],
  rule: (_evenColor: any, _oddColor: any, _repeat: any) => {
    return packageSpreadValue(
      { _evenColor, _oddColor, _repeat }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "CheckerboardMaterial", ["evenColor", "oddColor", "repeat"]);
    return node;
  },
};

export default CheckerboardMaterial;