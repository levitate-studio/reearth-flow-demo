import { spreadData, updateNode } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const BasicPacket: LvtNodeDef = {
  _id: "BasicPacket",
  ui: {
    title: "BasicPacket",
    description: "",
  },
  portsIn: [
    {
      name: "id",
      dataType: "stringArray",
    },
    {
      name: "name",
      dataType: "stringArray",
    },
    {
      name: "description",
      dataType: "stringArray",
    },
    {
      name: "position",
      dataType: "objectArray",
      defaultValue: [
        {
          cartographicDegrees: [141.064, 38.366, 100],
        },
      ],
    },
  ],
  portsOut: [
    {
      name: "packet",
      dataType: "objectArray",
    },
  ],
  rule: (id: any, name: any, description: any, position: any) => {
    const _id = spreadData(id);
    const _name = spreadData(name);
    const _description = spreadData(description);
    const _position = spreadData(position);
    const max = Math.max(
      _id.length,
      _name.length,
      _description.length,
      _position.length
    );
    const _temp = [];
    for (let i = 0; i < max; i += 1) {
      _temp.push({
        id: _id[i % _id.length],
        name: _name[i % _name.length],
        description: _description[i % _description.length],
        position: _position[i % _position.length],
      });
    }
    return _temp;
  },
  update: (node: LvtNode) => {
    updateNode(node, "packet", ["id", "name", "description", "position"]);
    return node;
  },
};

export default BasicPacket;
