import { updateNode } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Map: LvtNodeDef = {
  _id: "Map",
  ui: {
    title: "Map",
    description:
      "Maps the value in the given range to a proportional value in the given output range",
  },
  portsIn: [
    {
      name: "input",
      dataType: "numberArray",
      defaultValue: [0],
    },
    {
      name: "sourceMin",
      dataType: "number",
      defaultValue: 0,
    },
    {
      name: "sourceMax",
      dataType: "number",
      defaultValue: 1,
    },
    {
      name: "destinationMin",
      dataType: "number",
      defaultValue: 0,
    },
    {
      name: "destinationMax",
      dataType: "number",
      defaultValue: 1,
    },
  ],
  portsOut: [
    {
      name: "output",
      dataType: "number",
    },
  ],
  rule: (a: any, smin: number, smax: number, dmin: number, dmax: number) => {
    const _a = typeof a === "object" ? a : [a];
    const _temp: number[] = [];
    const sourceRange = smax - smin;
    const desRange = dmax - dmin;
    _a.forEach((v: number) => {
      _temp.push(((v - smin) / sourceRange) * desRange + dmin);
    });
    return _temp;
  },
  update: (node: LvtNode) => {
    updateNode(node, "output", [
      "input",
      "sourceMin",
      "sourceMax",
      "destinationMin",
      "destinationMax",
    ]);
    return node;
  },
};

export default Map;
