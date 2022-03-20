import convert from "color-convert";

import { spreadData, updateNode } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const HSLAToRGBA: LvtNodeDef = {
  _id: "HSLAToRGBA",
  ui: {
    title: "HSLAToRGBA",
    description: "",
  },
  portsIn: [
    {
      name: "h",
      dataType: "number",
      defaultValue: 0,
    },
    {
      name: "s",
      dataType: "number",
      defaultValue: 100,
    },
    {
      name: "l",
      dataType: "number",
      defaultValue: 100,
    },
    {
      name: "a",
      dataType: "number",
      defaultValue: 255,
    },
  ],
  portsOut: [
    {
      name: "rgba",
      dataType: "numberSpread",
    },
  ],
  rule: (h: any, s: any, l: any, a: any) => {
    const _h = spreadData(h);
    const _s = spreadData(s);
    const _l = spreadData(l);
    const _a = spreadData(a);
    const max = Math.max(_h.length, _s.length, _l.length, _a.length);
    const _temp = [];

    for (let i = 0; i < max; i += 1) {
      const rgb = convert.hsl.rgb([
        _h[i % _h.length],
        _s[i % _s.length],
        _l[i % _l.length],
      ]);
      _temp.push([...rgb, _a[i % _a.length]]);
    }

    return _temp;
  },
  update: (node: LvtNode) => {
    updateNode(node, "rgba", ["h", "s", "l", "a"]);
    return node;
  },
};

export default HSLAToRGBA;
