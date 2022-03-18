import { spreadData, updateNode } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const HexToRGBA: LvtNodeDef = {
  _id: "HexToRGBA",
  ui: {
    title: "HexToRGBA",
    description: "",
  },
  portsIn: [
    {
      name: "hex",
      dataType: "stringSpread",
    },
    {
      name: "alpha",
      dataType: "numberSpread",
      defaultValue: 255,
    },
  ],
  portsOut: [
    {
      name: "color",
      dataType: "numberSpread",
    },
  ],
  rule: (hex: any, alpha: any) => {
    const _hex = spreadData(hex);
    const _alpha = spreadData(alpha);
    const spreadLengths = [];
    if (_hex) spreadLengths.push(_hex.length);
    if (_alpha) spreadLengths.push(_alpha.length);
    const max = Math.max(...spreadLengths);
    const _temp = [];
    if (_hex) {
      for (let i = 0; i < max; i += 1) {
        _temp.push([
          parseInt("0x" + _hex[i % _hex.length].slice(1, 3)),
          parseInt("0x" + _hex[i % _hex.length].slice(3, 5)),
          parseInt("0x" + _hex[i % _hex.length].slice(5, 7)),
          _alpha[i % _alpha.length],
        ]);
      }
    }

    return _temp;
  },
  update: (node: LvtNode) => {
    updateNode(node, "color", ["hex", "alpha"]);
    return node;
  },
};

export default HexToRGBA;
