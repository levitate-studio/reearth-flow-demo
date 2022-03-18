import { updateNode, packageSpreadValue } from "../../../Core/CommFuc";
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
      dataType: "stringSpread",
    },
    {
      name: "name",
      dataType: "stringSpread",
    },
    {
      name: "description",
      dataType: "stringSpread",
    },
    {
      name: "position",
      dataType: "objectSpread",
    },
  ],
  portsOut: [
    {
      name: "packet",
      dataType: "objectSpread",
    },
  ],
  rule: (id: any, name: any, description: any, position: any) => {
    return packageSpreadValue({ id, name, description, position });
    // const _id = spreadData(id);
    // const _name = spreadData(name);
    // const _description = spreadData(description);
    // const _position = spreadData(position);

    // const max = Math.max(
    //   _id.length,
    //   _name.length,
    //   _description.length,
    //   _position.length
    // );
    // const _temp = [];
    // for (let i = 0; i < max; i += 1) {
    //   _temp.push({
    //     id: _id[i % _id.length],
    //     name: _name[i % _name.length],
    //     description: _description[i % _description.length],
    //     position: _position[i % _position.length],
    //   });
    // }
    // return _temp;
  },
  update: (node: LvtNode) => {
    updateNode(node, "packet", ["id", "name", "description", "position"]);
    return node;
  },
};

export default BasicPacket;
