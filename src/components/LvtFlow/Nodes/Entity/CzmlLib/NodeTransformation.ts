import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const NodeTransformation: LvtNodeDef = {
  _id: "NodeTransformation",
  ui: {
    title: "NodeTransformation",
    description: "A set of transformations to apply to a particular node in a 3D model.",
  },
  portsIn: [
    {
      name: "translation",
      dataType: "Translation",
      ui:{
        description: "The translation to apply to the model node."
      },
      defaultValue: [0.0, 0.0, 0.0],
    },{
      name: "rotation",
      dataType: "Rotation",
      ui:{
        description: "The rotation to apply to the model node."
      },
    },{
      name: "scale",
      dataType: "Scale",
      ui:{
        description: "The scaling to apply to the model node."
      },
      defaultValue: [1.0, 1.0, 1.0],
    },
  ],
  portsOut: [
    {
      name: "NodeTransformation",
      dataType: "NodeTransformation",
    },
  ],
  rule: (_translation: any, _rotation: any, _scale: any) => {
    return packageSpreadValue(
      { _translation, _rotation, _scale }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "NodeTransformation", ["translation", "rotation", "scale"]);
    return node;
  },
};

export default NodeTransformation;