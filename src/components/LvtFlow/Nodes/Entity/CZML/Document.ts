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
      dataType: "objectArray",
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
      dataType: "objectArray",
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
    const objects = node.getPortInByName("objects")?.getValue();
    const name = node.getPortInByName("name")?.getValue();
    const version = node.getPortInByName("version")?.getValue();
    node.getPortOutByName("CZML")?.setValue(node.rule(objects, name, version));
    return node;
  },
};

export default Document;
