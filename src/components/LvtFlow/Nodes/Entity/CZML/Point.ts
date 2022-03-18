import {
  updateNode,
  packageSpreadCompositeValues,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Point: LvtNodeDef = {
  _id: "Point",
  ui: {
    title: "Point",
    description: "",
  },
  portsIn: [
    {
      name: "color",
      dataType: "objectSpread",
    },
    {
      name: "pixelSize",
      dataType: "numberSpread",
    },
  ],
  portsOut: [
    {
      name: "point",
      dataType: "objectSpread",
    },
  ],
  rule: (color: any, pixelSize: any) => {
    return packageSpreadCompositeValues(
      { color, pixelSize },
      "object",
      "point"
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "point", ["color", "pixelSize"]);
    return node;
  },
};

export default Point;
