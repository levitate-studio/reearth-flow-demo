import MultiPoint from "./MultiPoint";
import RandomPoint from "./RandomPoint";

export default {
  _id: "GeoJSONTurf",
  children: [RandomPoint, MultiPoint],
};
