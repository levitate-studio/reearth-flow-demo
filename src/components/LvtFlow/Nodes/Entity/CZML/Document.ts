import { updateNode } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Document: LvtNodeDef = {
  _id: "Document",
  ui: {
    title: "Document",
    description: "",
  },
  portsIn: [
    {
      name: "objects",
      dataType: "objectSpread",
    },
    {
      name: "name",
      dataType: "string",
      defaultValue: "dataflow",
    },
    {
      name: "version",
      dataType: "string",
      defaultValue: "1.0",
    },
    {
      name: "clock",
      dataType: "Clock",
      ui: {
        description:
          "The clock settings for the entire data set. Only valid on the document object.",
      },
    },
  ],
  portsOut: [
    {
      name: "CZML",
      dataType: "objectSpread",
    },
  ],
  rule: (objects: any, name: any, version: any, clock: any) => {
    const documentPacket: any = {
      id: "document",
      name,
      version,
    };
    if (clock) {
      documentPacket.clock = clock[0];
    }
    if (typeof objects === "object") {
      return [documentPacket, ...objects];
    } else {
      return documentPacket;
    }
  },
  update: (node: LvtNode) => {
    updateNode(node, "CZML", ["objects", "name", "version", "clock"]);
    return node;
  },
};

export default Document;
