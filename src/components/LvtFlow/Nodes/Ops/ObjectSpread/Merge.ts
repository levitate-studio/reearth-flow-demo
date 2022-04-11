import { updateNode } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Merge: LvtNodeDef = {
  _id: "Merge",
  ui: {
    title: "Merge",
    description: "",
  },
  portsIn: [
    {
      name: "objects1",
      dataType: "objectSpread",
      defaultValue: [],
    },
    {
      name: "objects2",
      dataType: "objectSpread",
      defaultValue: [],
    },
    {
      name: "objects3",
      dataType: "objectSpread",
      defaultValue: [],
    },
    {
      name: "objects4",
      dataType: "objectSpread",
      defaultValue: [],
    },
    {
      name: "objects5",
      dataType: "objectSpread",
      defaultValue: [],
    },
    {
      name: "objects6",
      dataType: "objectSpread",
      defaultValue: [],
    },
    {
      name: "objects7",
      dataType: "objectSpread",
      defaultValue: [],
    },
    {
      name: "objects8",
      dataType: "objectSpread",
      defaultValue: [],
    },
    {
      name: "objects9",
      dataType: "objectSpread",
      defaultValue: [],
    },
    {
      name: "objects10",
      dataType: "objectSpread",
      defaultValue: [],
    },
  ],
  portsOut: [
    {
      name: "merged",
      dataType: "objectSpread",
    },
  ],
  rule: (
    objects1: any,
    objects2: any,
    objects3: any,
    objects4: any,
    objects5: any,
    objects6: any,
    objects7: any,
    objects8: any,
    objects9: any,
    objects10: any
  ) => {
    const _obj1 = Array.isArray(objects1) ? objects1 : [objects1];
    const _obj2 = Array.isArray(objects2) ? objects2 : [objects2];
    const _obj3 = Array.isArray(objects3) ? objects3 : [objects3];
    const _obj4 = Array.isArray(objects4) ? objects4 : [objects4];
    const _obj5 = Array.isArray(objects5) ? objects5 : [objects5];
    const _obj6 = Array.isArray(objects6) ? objects6 : [objects6];
    const _obj7 = Array.isArray(objects7) ? objects7 : [objects7];
    const _obj8 = Array.isArray(objects8) ? objects8 : [objects8];
    const _obj9 = Array.isArray(objects9) ? objects9 : [objects9];
    const _obj10 = Array.isArray(objects10) ? objects10 : [objects10];
    return [
      ..._obj1,
      ..._obj2,
      ..._obj3,
      ..._obj4,
      ..._obj5,
      ..._obj6,
      ..._obj7,
      ..._obj8,
      ..._obj9,
      ..._obj10,
    ];
  },
  update: (node: LvtNode) => {
    updateNode(node, "merged", [
      "objects1",
      "objects2",
      "objects3",
      "objects4",
      "objects5",
      "objects6",
      "objects7",
      "objects8",
      "objects9",
      "objects10",
    ]);
    return node;
  },
};

export default Merge;
