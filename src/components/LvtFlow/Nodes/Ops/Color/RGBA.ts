import { spreadData } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const RGBA: LvtNodeDef = {
  _id: "RGBA",
  ui: {
    title: "RGBA",
    description: "",
  },
  portsIn: [
    {
      name: "R",
      dataType: "numberArray",
    },
    {
      name: "G",
      dataType: "numberArray",
    },
    {
      name: "B",
      dataType: "numberArray",
    },
    {
      name: "A",
      dataType: "numberArray",
    },
  ],
  portsOut: [
    {
      name: "color",
      dataType: "objectArray",
    },
  ],
  rule: (R: any, G: any, B: any, A: any) => {
    const _R = spreadData(R);
    const _G = spreadData(G);
    const _B = spreadData(B);
    const _A = spreadData(A);
    const max = Math.max(_R.length, _G.length, _B.length, _A.length);
    const _temp = [];
    for (let i = 0; i < max; i += 1) {
      _temp.push({
        rgba: [
          _R[i % _R.length],
          _G[i % _G.length],
          _B[i % _B.length],
          _A[i % _A.length],
        ],
      });
    }
    return _temp;
  },
  update: (node: LvtNode) => {
    const R = node.getPortInByName("R")?.getValue();
    const G = node.getPortInByName("G")?.getValue();
    const B = node.getPortInByName("B")?.getValue();
    const A = node.getPortInByName("A")?.getValue();

    node.getPortOutByName("color")?.setValue(node.rule(R, G, B, A));
    return node;
  },
};

export default RGBA;
