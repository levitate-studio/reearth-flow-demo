import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const InterpolatableProperty: LvtNodeDef = {
  _id: "InterpolatableProperty",
  ui: {
    title: "InterpolatableProperty",
    description: "The base schema for a property whose value may be determined by interpolating over provided time-tagged samples.",
  },
  portsIn: [
    {
      name: "epoch",
      dataType: "String",
      ui:{
        description: "The epoch to use for times specified as seconds since an epoch."
      },
    },{
      name: "interpolationAlgorithm",
      dataType: "String",
      ui:{
        description: "The interpolation algorithm to use when interpolating. Valid values are 'LINEAR', 'LAGRANGE', and 'HERMITE'."
      },
    },{
      name: "interpolationDegree",
      dataType: "Number",
      ui:{
        description: "The degree of interpolation to use when interpolating."
      },
    },{
      name: "forwardExtrapolationType",
      dataType: "String",
      ui:{
        description: "The type of extrapolation to perform when a value is requested at a time after any available samples. Valid values are 'NONE', 'HOLD', and 'EXTRAPOLATE'."
      },
    },{
      name: "forwardExtrapolationDuration",
      dataType: "Number",
      ui:{
        description: "The amount of time to extrapolate forward before the property becomes undefined. A value of 0 will extrapolate forever."
      },
    },{
      name: "backwardExtrapolationType",
      dataType: "String",
      ui:{
        description: "The type of extrapolation to perform when a value is requested at a time before any available samples. Valid values are 'NONE', 'HOLD', and 'EXTRAPOLATE'."
      },
    },{
      name: "backwardExtrapolationDuration",
      dataType: "Number",
      ui:{
        description: "The amount of time to extrapolate backward before the property becomes undefined. A value of 0 will extrapolate forever."
      },
    },
  ],
  portsOut: [
    {
      name: "InterpolatableProperty",
      dataType: "InterpolatableProperty",
    },
  ],
  rule: (_epoch: any, _interpolationAlgorithm: any, _interpolationDegree: any, _forwardExtrapolationType: any, _forwardExtrapolationDuration: any, _backwardExtrapolationType: any, _backwardExtrapolationDuration: any) => {
    return packageSpreadValue(
      { _epoch, _interpolationAlgorithm, _interpolationDegree, _forwardExtrapolationType, _forwardExtrapolationDuration, _backwardExtrapolationType, _backwardExtrapolationDuration }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "InterpolatableProperty", ["epoch", "interpolationAlgorithm", "interpolationDegree", "forwardExtrapolationType", "forwardExtrapolationDuration", "backwardExtrapolationType", "backwardExtrapolationDuration"]);
    return node;
  },
};

export default InterpolatableProperty;