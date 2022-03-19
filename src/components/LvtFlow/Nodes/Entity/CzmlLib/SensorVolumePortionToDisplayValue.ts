import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const SensorVolumePortionToDisplayValue: LvtNodeDef = {
  _id: "SensorVolumePortionToDisplayValue",
  ui: {
    title: "SensorVolumePortionToDisplayValue",
    description: "What part of a sensor should be displayed.",
  },
  portsIn: [
    {
      name: "value",
      dataType: "string",
      ui: {
        component: "Select",
        componentOptions: {
          selectorSourceType: "self",
          selectorOptions: [
            {
              title: "",
              value: undefined,
            },
            {
              title: "COMPLETE",
              value: "COMPLETE"
            },{
              title: "BELOW_ELLIPSOID_HORIZON",
              value: "BELOW_ELLIPSOID_HORIZON"
            },{
              title: "ABOVE_ELLIPSOID_HORIZON",
              value: "ABOVE_ELLIPSOID_HORIZON"
            },
          ]
        },
        hidden: true,
      },
    },
  ],
  portsOut: [
    {
      name: "SensorVolumePortionToDisplayValue",
      dataType: "string",
    },
  ],
  rule: (v: any) => {
    return v;
  },
  update: (node: LvtNode) => {
    updateNode(node, "SensorVolumePortionToDisplayValue", ["value"]);
    return node;
  },
};

export default SensorVolumePortionToDisplayValue;