import Document from "./Document";
import MergeFeatures from "./MergeFeatures";
import MultiPoint from "./MultiPoint";
import RandomPoint from "./RandomPoint";
import Renderer from "./Renderer";
import Writer from "./Writer";

export default {
  _id: "GeoJSON",
  children: [
    Document,
    RandomPoint,
    MultiPoint,
    Renderer,
    MergeFeatures,
    Writer,
  ],
};
