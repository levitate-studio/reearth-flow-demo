import { multiPoint } from "@turf/helpers";

import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const MultiPoint: LvtNodeDef = {
  _id: "MultiPoint",
  ui: {
    title: "MultiPoint",
    description: "https://turfjs.org/docs/#point",
  },
  portsIn: [
    {
      name: "coordinates",
      dataType: "numberSpread",
      ui: {
        description: "longitude, latitude position (each in decimal degrees)",
      },
    },
    {
      name: "properties",
      dataType: "object",
      ui: {
        description: "an Object of key-value pairs to add as properties",
      },
    },
    {
      name: "bbox",
      dataType: "numberSpread",
      ui: {
        description: "Bounding Box Array",
      },
    },
    {
      name: "id",
      dataType: "string",
      ui: {
        description: "Identifier associated with the Feature",
      },
    },
  ],
  portsOut: [
    {
      name: "points",
      dataType: "object",
      ui: {
        description: "a MultiPoint feature",
      },
      defaultValue: multiPoint([]),
    },
  ],
  rule: multiPoint,
  update: (node: LvtNode) => {
    const coordinates = node.getPortInByName("coordinates")?.getValue();
    const properties = node.getPortInByName("properties")?.getValue();
    const bbox = node.getPortInByName("bbox")?.getValue();
    const id = node.getPortInByName("id")?.getValue();

    const options: any = bbox || id ? {} : undefined;
    if (bbox) options.bbox = bbox;
    if (id) options.id = id;

    node
      .getPortOutByName("points")
      ?.setValue(node.rule(coordinates, properties, options));
  },
};

export default MultiPoint;
