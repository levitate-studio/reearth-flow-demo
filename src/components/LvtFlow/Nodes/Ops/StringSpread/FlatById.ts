import { updateNode } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const FlatById: LvtNodeDef = {
  _id: "FlatById",
  ui: {
    title: "FlatById",
    description: "",
  },
  portsIn: [
    {
      name: "data",
      dataType: "stringSpread",
      defaultValue: 0,
    },
    {
      name: "id",
      dataType: "stringSpread",
      defaultValue: 0,
    },
  ],
  portsOut: [
    {
      name: "result",
      dataType: "stringSpread",
    },
  ],
  rule: (data: any, id: any) => {
    const _data = typeof data === "object" ? data : [data];
    const _id = typeof id === "object" ? id : [id];
    //
    const _temp: any = {};
    const _result = [];

    if (_data && _id) {
      for (let i = 0, m = _data.length; i < m; i += 1) {
        if (!_temp[_id[i]]) _temp[_id[i]] = [];
        (_temp[_id[i]] as any[]).push(_data[i]);
      }

      const keys = Object.keys(_temp);
      for (let j = 0, n = keys.length; j < n; j += 1) {
        _result.push(_temp[keys[j]].flat(Infinity));
      }
    }

    return _result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "result", ["data", "id"]);
    return node;
  },
};

export default FlatById;
