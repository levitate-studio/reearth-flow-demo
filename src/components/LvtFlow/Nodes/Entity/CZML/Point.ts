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
      dataType: "objectArray",
    },
    {
      name: "pixelSize",
      dataType: "numberArray",
    },
  ],
  portsOut: [
    {
      name: "point",
      dataType: "objectArray",
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
