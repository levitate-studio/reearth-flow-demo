import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Renderer: LvtNodeDef = {
  _id: "Renderer",
  isRenderer: true,
  ui: {
    title: "Renderer",
    description: "",
  },
  portsIn: [
    {
      name: "CZML",
      dataType: "objectArray",
    },
  ],
  portsOut: [
    {
      name: "renderData",
      dataType: "object",
      isRenderSource: true,
      ui: {
        hidden: true,
      },
    },
  ],
  rule: (a: any) => {
    return {
      dataType: "CZML",
      data: a,
    };
  },
  update: (node: LvtNode) => {
    const geoJSON = node.getPortInByName("CZML")?.getValue();
    node.getPortOutByName("renderData")?.setValue(node.rule(geoJSON));
    return node;
  },
};

export default Renderer;
