import CSV from "./CSV";
import CZML from "./CZML";
import CzmlLib from "./CzmlLib";
import GeoJSON from "./GeoJSON";

export default {
  _id: "Entity",
  children: [CSV, CZML, CzmlLib, GeoJSON],
};
