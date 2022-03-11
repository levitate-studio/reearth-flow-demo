import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Document: LvtNodeDef = {
  _id: "Document",
  ui: {
    title: "CzmlDocument",
    description: "",
  },
  portsIn: [
    {
      name: "objects",
      dataType: "objectArray",
    },
  ],
  portsOut: [
    {
      name: "CZML",
      dataType: "objectArray",
    },
  ],
  rule: (a: any) => {
    if (typeof a === "object") {
      return [
        {
          id: "document",
          name: "data-flow",
          version: "1.0",
        },
        ...a,
      ];
    } else {
      return [];
    }
  },
  update: (node: LvtNode) => {
    const objects = node.getPortInByName("objects")?.getValue();
    node.getPortOutByName("CZML")?.setValue(node.rule(objects));
    return node;
  },
};

export default Document;
