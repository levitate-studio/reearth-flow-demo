import MultiPoint from "./MultiPoint";
import RandomPoint from "./RandomPoint";
import Renderer from "./Renderer";

export default {
  _id: "GeoJSON",
  children: [RandomPoint, MultiPoint, Renderer],
};
