import { updateNode, packageSpreadValue } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const RendererOptions: LvtNodeDef = {
  _id: "RendererOptions",
  ui: {
    title: "RendererOptions",
    description: "Options for cesium",
  },
  portsIn: [
    {
      name: "onInit",
      dataType: "object",
    },
    {
      name: "showAnimation",
      dataType: "boolean",
      defaultValue: true,
      ui: {
        hidden: true,
      },
    },
    {
      name: "showTimeline",
      dataType: "boolean",
      defaultValue: true,
      ui: {
        hidden: true,
      },
    },
  ],
  portsOut: [
    {
      name: "renderOptions",
      dataType: "object",
    },
  ],
  rule: (showAnimation: any, showTimeline: any, onInit: any) => {
    return packageSpreadValue({
      showAnimation,
      showTimeline,
      onInit,
    });
  },
  update: (node: LvtNode) => {
    updateNode(node, "renderOptions", [
      "showAnimation",
      "showTimeline",
      "onInit",
    ]);
    return node;
  },
};

export default RendererOptions;
