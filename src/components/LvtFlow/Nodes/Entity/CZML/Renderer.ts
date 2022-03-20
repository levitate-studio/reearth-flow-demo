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
    updateNode(node, "renderData", ["CZML"]);
    return node;
  },
};

export default Renderer;
