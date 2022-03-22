import { updateNode } from "../../../Core/CommFuc";
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
      dataType: "objectSpread",
    },
    {
      name: "rendererOptions",
      dataType: "object",
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
  rule: (czml: any, rendererOptions: any) => {
    return {
      dataType: "CZML",
      data: czml,
      options: rendererOptions ? rendererOptions[0] : undefined,
    };
  },
  update: (node: LvtNode) => {
    updateNode(node, "renderData", ["CZML", "rendererOptions"]);
    return node;
  },
};

export default Renderer;
