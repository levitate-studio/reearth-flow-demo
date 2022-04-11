import Document from "./Document";
import MultiPoint from "./MultiPoint";
import RandomPoint from "./RandomPoint";
import Renderer from "./Renderer";

export default {
  _id: "GeoJSON",
  children: [Document, RandomPoint, MultiPoint, Renderer],
};
