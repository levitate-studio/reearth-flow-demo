import RandomPosition from "./RandomPosition"
import RandomPoint from "./RandomPoint"
import RandomPointOptions from "./RandomPointOptions"
import RandomLineString from "./RandomLineString"
import RandomLineStringOptions from "./RandomLineStringOptions"
import RandomPolygon from "./RandomPolygon"
import RandomPolygonOptions from "./RandomPolygonOptions"

export default {
  _id: "Random",
  children: [
    RandomPosition,
    RandomPoint,
    RandomPointOptions,
    RandomLineString,
    RandomLineStringOptions,
    RandomPolygon,
    RandomPolygonOptions
  ],
};
  