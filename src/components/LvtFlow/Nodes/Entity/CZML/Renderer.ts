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
      name: "showAnimation",
      dataType: "boolean",
      defaultValue: false,
      ui: {
        hidden: true,
      },
    },
    {
      name: "showTimeline",
      dataType: "boolean",
      defaultValue: false,
      ui: {
        hidden: true,
      },
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
  rule: (a: any, showAnimation: any, showTimeline: any) => {
    return {
      dataType: "CZML",
      data: a,
      options: {
        showAnimation,
        showTimeline,
      },
    };
  },
  update: (node: LvtNode) => {
    updateNode(node, "renderData", ["CZML", "showAnimation", "showTimeline"]);
    return node;
  },
};

export default Renderer;
