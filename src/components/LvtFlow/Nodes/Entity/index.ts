import CSV from "../Entity/CSV";
import CZML from "../Entity/CZML";
import GeoJSONTurf from "../Entity/GeoJSONTurf";

export default {
  _id: "Entity",
  children: [CSV, CZML, GeoJSONTurf],
};
