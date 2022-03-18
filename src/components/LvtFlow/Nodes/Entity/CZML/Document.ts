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
  ],
  portsOut: [
    {
      name: "CZML",
      dataType: "objectSpread",
    },
  ],
  rule: (objects: any, name: any, version: any) => {
    if (typeof objects === "object") {
      return [
        {
          id: "document",
          name,
          version,
        },
        ...objects,
      ];
    } else {
      return [
        {
          id: "document",
          name,
          version,
        },
      ];
    }
  },
  update: (node: LvtNode) => {
    updateNode(node, "CZML", ["objects", "name", "version"]);
    return node;
  },
};

export default Document;
