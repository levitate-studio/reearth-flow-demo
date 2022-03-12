import CSV from "./CSV";
import CZML from "./CZML";
import GeoJSON from "./GeoJSON";

export default {
  _id: "Entity",
  children: [CSV, CZML, GeoJSON],
};
