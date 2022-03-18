import {
  updateNode,
  packageSpreadCompositeValues,
} from "../../../Core/CommFuc";
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
      dataType: "stringSpread",
    },
    {
      name: "scale",
      dataType: "numberSpread",
      defaultValue: [1],
    },
    {
      name: "width",
      dataType: "numberSpread",
    },
    {
      name: "height",
      dataType: "numberSpread",
    },
  ],
  portsOut: [
    {
      name: "billboard",
      dataType: "objectSpread",
    },
  ],
  rule: (image: any, scale: any, width: any, height: any) => {
    return packageSpreadCompositeValues(
      { image, scale, width, height },
      "object",
      "billboard"
    );
    // const _image = spreadData(image);
    // const _scale = spreadData(scale);
    // const _width = spreadData(width);
    // const _height = spreadData(height);

    // const max = Math.max(
    //   _image.length,
    //   _scale.length,
    //   _width.length,
    //   _height.length
    // );
    // const _temp = [];
    // for (let i = 0; i < max; i += 1) {
    //   _temp.push({
    //     billboard: {
    //       image: _image[i % _image.length],
    //       scale: _scale[i % _scale.length],
    //       width: _width[i % _width.length],
    //       height: _height[i % _height.length],
    //     },
    //   });
    // }
    // return _temp;
  },
  update: (node: LvtNode) => {
    updateNode(node, "billboard", ["image", "scale", "width", "height"]);
    return node;
  },
};

export default Billboard;
