import { updateNode, packageSpreadValue } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const OnInit: LvtNodeDef = {
  _id: "OnInit",
  ui: {
    title: "OnInit",
    description: "Options on cesium init and data loaded",
  },
  portsIn: [
    {
      name: "terrainProvider",
      dataType: "string",
      ui: {
        hidden: true,
      },
    },
    {
      name: "trackedEntityId",
      dataType: "string",
      ui: {
        hidden: true,
      },
    },
    {
      name: "shouldAnimate",
      dataType: "boolean",
      ui: {
        hidden: true,
      },
    },
  ],
  portsOut: [
    {
      name: "onInit",
      dataType: "object",
    },
  ],
  rule: (terrainProvider: any, trackedEntityId: any, shouldAnimate: any) => {
    return packageSpreadValue({
      terrainProvider,
      trackedEntityId,
      shouldAnimate,
    });
  },
  update: (node: LvtNode) => {
    updateNode(node, "onInit", [
      "terrainProvider",
      "trackedEntityId",
      "shouldAnimate",
    ]);
    return node;
  },
};

export default OnInit;
