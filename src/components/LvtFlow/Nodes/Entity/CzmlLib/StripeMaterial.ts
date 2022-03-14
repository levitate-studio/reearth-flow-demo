import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const StripeMaterial: LvtNodeDef = {
  _id: "StripeMaterial",
  ui: {
    title: "StripeMaterial",
    description: "A material that fills the surface with alternating colors.",
  },
  portsIn: [
    {
      name: "orientation",
      dataType: "StripeOrientation",
      ui:{
        description: "The value indicating if the stripes are horizontal or vertical."
      },
      defaultValue: "HORIZONTAL",
    },{
      name: "evenColor",
      dataType: "Color",
      ui:{
        description: "The even color."
      },
    },{
      name: "oddColor",
      dataType: "Color",
      ui:{
        description: "The odd color."
      },
      defaultValue: "black",
    },{
      name: "offset",
      dataType: "Double",
      ui:{
        description: "The value indicating where in the pattern to begin drawing, with 0.0 being the beginning of the even color, 1.0 the beginning of the odd color, 2.0 being the even color again, and any multiple or fractional values being in between."
      },
    },{
      name: "repeat",
      dataType: "Double",
      ui:{
        description: "The number of times the stripes repeat."
      },
      defaultValue: 1.0,
    },
  ],
  portsOut: [
    {
      name: "StripeMaterial",
      dataType: "StripeMaterial",
    },
  ],
  rule: (_orientation: any, _evenColor: any, _oddColor: any, _offset: any, _repeat: any) => {
    return packageSpreadValue(
      { _orientation, _evenColor, _oddColor, _offset, _repeat }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "StripeMaterial", ["orientation", "evenColor", "oddColor", "offset", "repeat"]);
    return node;
  },
};

export default StripeMaterial;