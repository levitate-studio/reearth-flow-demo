import { spreadData, updateNode } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Billboard: LvtNodeDef = {
  _id: "Billboard",
  ui: {
    title: "Billboard",
    description: "",
  },
  portsIn: [
    {
      name: "image",
      dataType: "stringArray",
    },
    {
      name: "scale",
      dataType: "numberArray",
      defaultValue: [1],
    },
    {
      name: "width",
      dataType: "numberArray",
    },
    {
      name: "height",
      dataType: "numberArray",
    },
  ],
  portsOut: [
    {
      name: "billboard",
      dataType: "objectArray",
    },
  ],
  rule: (image: any, scale: any, width: any, height: any) => {
    const _image = spreadData(image);
    const _scale = spreadData(scale);
    const _width = spreadData(width);
    const _height = spreadData(height);

    const max = Math.max(
      _image.length,
      _scale.length,
      _width.length,
      _height.length
    );
    const _temp = [];
    for (let i = 0; i < max; i += 1) {
      _temp.push({
        billboard: {
          image: _image[i % _image.length],
          scale: _scale[i % _scale.length],
          width: _width[i % _width.length],
          height: _height[i % _height.length],
        },
      });
    }
    return _temp;
  },
  update: (node: LvtNode) => {
    updateNode(node, "billboard", ["image", "scale", "width", "height"]);
    return node;
  },
};

export default Billboard;
