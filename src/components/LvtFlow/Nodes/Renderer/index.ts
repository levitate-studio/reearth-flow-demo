import CZML from "./CZML";
import GeoJSON from "./GeoJSON";

export default {
  _id: "Renderer",
  children: [GeoJSON, CZML],
};
