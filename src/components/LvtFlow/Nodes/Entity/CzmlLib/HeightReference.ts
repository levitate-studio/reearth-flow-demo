import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const HeightReference: LvtNodeDef = {
  _id: "HeightReference",
  ui: {
    title: "HeightReference",
    description: "The height reference of an object, which indicates if the object's position is relative to terrain or not.",
  },
  portsIn: [
    {
      name: "heightReference",
      dataType: "HeightReferenceValue",
      ui:{
        description: "The height reference."
      },
    },{
      name: "reference",
      dataType: "ReferenceValue",
      ui:{
        description: "The height reference specified as a reference to another property."
      },
    },
  ],
  portsOut: [
    {
      name: "HeightReference",
      dataType: "HeightReference",
    },
  ],
  rule: (_heightReference: any, _reference: any) => {
    return packageSpreadValue(
      { _heightReference, _reference }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "HeightReference", ["heightReference", "reference"]);
    return node;
  },
};

export default HeightReference;