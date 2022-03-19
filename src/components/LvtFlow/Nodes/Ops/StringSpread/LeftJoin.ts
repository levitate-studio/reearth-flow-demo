import { updateNode } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const LeftJoin: LvtNodeDef = {
  _id: "LeftJoin",
  ui: {
    title: "LeftJoin",
    description: "",
  },
  portsIn: [
    {
      name: "t1",
      dataType: "stringSpread",
    },
    {
      name: "t1KeyColumn",
      dataType: "number",
      defaultValue: 0,
      ui: {
        component: "Select",
        componentOptions: {
          selectorSource: "t1",
          selectorSourceType: "csvColumn",
        },
        hidden: true,
      },
    },
    {
      name: "t2",
      dataType: "stringSpread",
    },
    {
      name: "t2KeyColumn",
      dataType: "number",
      defaultValue: 0,
      ui: {
        component: "Select",
        componentOptions: {
          selectorSource: "t2",
          selectorSourceType: "csvColumn",
        },
        hidden: true,
      },
    },
  ],
  portsOut: [
    {
      name: "result",
      dataType: "stringSpread",
    },
  ],
  rule: (t1: any, t1KeyColumn: any, t2: any, t2KeyColumn: any) => {
    let _temp = [];
    if (t1 && t2) {
      _temp.push([...t1[0], ...t2[0]]);
      const emptyT2 = new Array(t2[0].length).fill("");
      for (let i = 1, m = t1.length; i < m; i += 1) {
        const tar = t1[i][t1KeyColumn];
        let findMatch = false;
        for (let j = 1, n = t2.length; j < n; j += 1) {
          const cur = t2[j][t2KeyColumn];
          if (cur.trim().toLowerCase() === tar.trim().toLowerCase()) {
            _temp.push([...t1[i], ...t2[j]]);
            findMatch = true;
            break;
          }
        }
        if (!findMatch) {
          _temp.push([...t1[i], ...emptyT2]);
        }
      }
    } else if (t1) {
      _temp = t1;
    }
    return _temp;
  },
  update: (node: LvtNode) => {
    updateNode(node, "result", ["t1", "t1KeyColumn", "t2", "t2KeyColumn"]);
    return node;
  },
};

export default LeftJoin;
