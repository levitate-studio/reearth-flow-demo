import { spreadData } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const PointGraphic: LvtNodeDef = {
  _id: "PointGraphic",
  ui: {
    title: "Point Graphic",
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
      name: "pointGraphic",
      dataType: "objectArray",
    },
  ],
  rule: (color: any, pixelSize: any) => {
    const _color = spreadData(color);
    const _pixelSize = spreadData(pixelSize);

    const max = Math.max(_color.length, _pixelSize.length);
    const _temp = [];
    for (let i = 0; i < max; i += 1) {
      _temp.push({
        color: _color[i % _color.length],
        pixelSize: _pixelSize[i % _pixelSize.length],
      });
    }
    return _temp;
  },
  update: (node: LvtNode) => {
    const color = node.getPortInByName("color")?.getValue();
    const pixelSize = node.getPortInByName("pixelSize")?.getValue();

    node
      .getPortOutByName("pointGraphic")
      ?.setValue(node.rule(color, pixelSize));
    return node;
  },
};

export default PointGraphic;
