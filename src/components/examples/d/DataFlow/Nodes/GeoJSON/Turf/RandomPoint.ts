import { randomPoint } from "@turf/random";

import { getPortInValue, getPortOutValueObj } from "../../../Common/AssistFns";

const RandomPoint = {
  public: {
    title: "RandomPoint",
    des: "http://turfjs.org/docs/#randomPoint",
  },
  portsIn: [
    {
      name: "count",
      type: "number",
      des: "how many geometries will be generated",
    },
    {
      name: "bbox",
      type: "array",
      des: "a bounding box inside of which geometries are placed",
      defaultValue: [],
    },
  ],
  portsOut: [
    {
      name: "points",
      type: "geoJSONObject",
      des: "GeoJSON FeatureCollection of points",
      component: "outputSource",
      defaultValue: randomPoint(0),
    },
  ],
  update: (data: any) => {
    const count = getPortInValue(data, "count");
    const bbox = getPortInValue(data, "bbox");
    const points = getPortOutValueObj(data, "points");
    const options = bbox.length > 0 ? { bbox } : undefined;
    points.v = randomPoint(count, options);
  },
};

export default RandomPoint;
