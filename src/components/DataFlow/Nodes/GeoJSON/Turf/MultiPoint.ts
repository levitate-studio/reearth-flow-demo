import { multiPoint } from "@turf/helpers";

import { getPortInValue, getPortOutValueObj } from "../../../Common/AssistFns";

const MultiPoint = {
  public: {
    title: "MultiPoint",
    des: "https://turfjs.org/docs/#point",
  },
  portsIn: [
    {
      name: "coordinates",
      type: "array",
      des: "longitude, latitude position (each in decimal degrees)",
      component: "OutputSource",
    },
    {
      name: "properties",
      type: "object",
      des: "an Object of key-value pairs to add as properties",
      component: "OutputSource",
    },
    {
      name: "bbox",
      type: "array",
      des: "Bounding Box Array",
      component: "OutputSource",
    },
    {
      name: "id",
      type: "string",
      des: "Identifier associated with the Feature",
      component: "OutputSource",
    },
  ],
  portsOut: [
    {
      name: "points",
      type: "geoJSONObject",
      des: "a MultiPoint feature",
      component: "OutputSource",
      defaultValue: multiPoint([]),
    },
  ],
  update: (data: any) => {
    const coordinates = getPortInValue(data, "coordinates");
    const properties = getPortInValue(data, "properties");
    const bbox = getPortInValue(data, "bbox");
    const id = getPortInValue(data, "id");
    const points = getPortOutValueObj(data, "points");
    const options: any =
      bbox.length > 0 && id.length > 0 ? { bbox, id } : undefined;
    points.v = multiPoint(coordinates, properties, options);
  },
};

export default MultiPoint;
