import { spreadData } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Positions: LvtNodeDef = {
  _id: "Positions",
  ui: {
    title: "CzmlPositions",
    description: "",
  },
  portsIn: [
    {
      name: "longitude",
      dataType: "numberArray",
    },
    {
      name: "latitude",
      dataType: "numberArray",
    },
    {
      name: "height",
      dataType: "numberArray",
      defaultValue: [0],
    },
  ],
  portsOut: [
    {
      name: "positions",
      dataType: "objectArray",
    },
  ],
  rule: (longitude: any, latitude: any, height: any) => {
    const _longitude = spreadData(longitude);
    const _latitude = spreadData(latitude);
    const _height = spreadData(height);

    const max = Math.max(_longitude.length, _latitude.length, _height.length);
    const _temp = [];
    for (let i = 0; i < max; i += 1) {
      _temp.push({
        cartographicDegrees: [
          _longitude[i % _longitude.length],
          _latitude[i % _latitude.length],
          _height[i % _height.length],
        ],
      });
    }
    return _temp;
  },
  update: (node: LvtNode) => {
    const longitude = node.getPortInByName("longitude")?.getValue();
    const latitude = node.getPortInByName("latitude")?.getValue();
    const height = node.getPortInByName("height")?.getValue();

    node
      .getPortOutByName("positions")
      ?.setValue(node.rule(longitude, latitude, height));
    return node;
  },
};

export default Positions;
