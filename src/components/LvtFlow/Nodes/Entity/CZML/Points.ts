import { spreadData } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Points: LvtNodeDef = {
  _id: "Points",
  ui: {
    title: "Points",
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
    {
      name: "point",
      dataType: "objectArray",
      defaultValue: [
        {
          color: {
            rgba: [255, 0, 0, 255],
          },
          pixelSize: 8,
        },
      ],
    },
  ],
  portsOut: [
    {
      name: "points",
      dataType: "objectArray",
    },
  ],
  rule: (id: any, name: any, description: any, position: any, point: any) => {
    const _id = spreadData(id);
    const _name = spreadData(name);
    const _description = spreadData(description);
    const _position = spreadData(position);
    const _point = spreadData(point);
    const max = Math.max(
      _id.length,
      _name.length,
      _description.length,
      _position.length,
      _point.length
    );
    const _temp = [];
    for (let i = 0; i < max; i += 1) {
      _temp.push({
        id: _id[i % _id.length],
        name: _name[i % _name.length],
        description: _description[i % _description.length],
        position: _position[i % _position.length],
        point: _point[i % _point.length],
      });
    }
    return _temp;
  },
  update: (node: LvtNode) => {
    const id = node.getPortInByName("id")?.getValue();
    const name = node.getPortInByName("name")?.getValue();
    const description = node.getPortInByName("description")?.getValue();
    const position = node.getPortInByName("position")?.getValue();
    const point = node.getPortInByName("point")?.getValue();

    node
      .getPortOutByName("points")
      ?.setValue(node.rule(id, name, description, position, point));
    return node;
  },
};

export default Points;
