import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const SensorVolumePortionToDisplay: LvtNodeDef = {
  _id: "SensorVolumePortionToDisplay",
  ui: {
    title: "SensorVolumePortionToDisplay",
    description: "The part of a sensor that should be displayed.",
  },
  portsIn: [
    {
      name: "portionToDisplay",
      dataType: "SensorVolumePortionToDisplayValue",
      ui:{
        description: "The part of a sensor to display."
      },
    },{
      name: "reference",
      dataType: "ReferenceValue",
      ui:{
        description: "The part of a sensor to display, specified as a reference to another property."
      },
    },
  ],
  portsOut: [
    {
      name: "SensorVolumePortionToDisplay",
      dataType: "SensorVolumePortionToDisplay",
    },
  ],
  rule: (_portionToDisplay: any, _reference: any) => {
    return packageSpreadValue(
      { _portionToDisplay, _reference }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "SensorVolumePortionToDisplay", ["portionToDisplay", "reference"]);
    return node;
  },
};

export default SensorVolumePortionToDisplay;