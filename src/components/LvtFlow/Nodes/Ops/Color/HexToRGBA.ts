import { spreadData } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const HexToRGBA: LvtNodeDef = {
  _id: "HexToRGBA",
  ui: {
    title: "Hex To RGBA",
    description: "",
  },
  portsIn: [
    {
      name: "hex",
      dataType: "stringArray",
    },
    {
      name: "alpha",
      dataType: "numberArray",
    },
  ],
  portsOut: [
    {
      name: "color",
      dataType: "objectArray",
    },
  ],
  rule: (hex: any, alpha: any) => {
    const _hex = spreadData(hex);
    const _alpha = spreadData(alpha);

    const max = Math.max(_hex.length, _alpha.length);
    const _temp = [];
    for (let i = 0; i < max; i += 1) {
      _temp.push({
        rgba: [
          parseInt("0x" + _hex[i % _hex.length].slice(1, 3)),
          parseInt("0x" + _hex[i % _hex.length].slice(3, 5)),
          parseInt("0x" + _hex[i % _hex.length].slice(5, 7)),
          _alpha[i % _alpha.length],
        ],
      });
    }
    return _temp;
  },
  update: (node: LvtNode) => {
    const hex = node.getPortInByName("hex")?.getValue();
    const alpha = node.getPortInByName("alpha")?.getValue();

    node.getPortOutByName("color")?.setValue(node.rule(hex, alpha));
    return node;
  },
};

export default HexToRGBA;
