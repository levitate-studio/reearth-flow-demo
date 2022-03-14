import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const NearFarScalar: LvtNodeDef = {
  _id: "NearFarScalar",
  ui: {
    title: "NearFarScalar",
    description: "A numeric value which will be linearly interpolated between two values based on an object's distance from the camera, in eye coordinates. The computed value will interpolate between the near value and the far value while the camera distance falls between the near distance and the far distance, and will be clamped to the near or far value while the distance is less than the near distance or greater than the far distance, respectively.",
  },
  portsIn: [
    {
      name: "nearFarScalar",
      dataType: "NearFarScalarValue",
      ui:{
        description: "The value specified as four values `[NearDistance, NearValue, FarDistance, FarValue]`, with distances in eye coordinates in meters."
      },
    },{
      name: "reference",
      dataType: "ReferenceValue",
      ui:{
        description: "The value specified as a reference to another property."
      },
    },
  ],
  portsOut: [
    {
      name: "NearFarScalar",
      dataType: "NearFarScalar",
    },
  ],
  rule: (_nearFarScalar: any, _reference: any) => {
    return packageSpreadValue(
      { _nearFarScalar, _reference }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "NearFarScalar", ["nearFarScalar", "reference"]);
    return node;
  },
};

export default NearFarScalar;