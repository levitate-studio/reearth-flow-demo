import { spreadData, updateNode } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Custom: LvtNodeDef = {
  _id: "Custom",
  ui: {
    title: "Custom",
    description: "Create custom object spread",
  },
  portsIn: [
    {
      name: "key",
      dataType: "string",
      defaultValue: "",
    },
    {
      name: "value",
      dataType: "any",
      defaultValue: "",
    },
  ],
  portsOut: [
    {
      name: "object",
      dataType: "objectSpread",
    },
  ],
  rule: (key: any, value: any) => {
    const _key = spreadData(key);
    const _value = spreadData(value);
    const max = Math.max(_key.length, _value.length);
    const _temp = [];
    for (let i = 0; i < max; i += 1) {
      const item: any = {};
      if (_key[i % _key.length]) {
        item[_key[i % _key.length]] = _value[i % _value.length];
      }
      _temp.push(item);
    }
    return _temp;
  },
  update: (node: LvtNode) => {
    updateNode(node, "object", ["key", "value"]);
    return node;
  },
};

export default Custom;
