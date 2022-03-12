import Document from "./Document";
import Merge from "./Merge";
import PointGraphic from "./PointGraphic";
import Points from "./Points";
import Positions from "./Positions";
import Renderer from "./Renderer";

export default {
  _id: "CZML",
  children: [Points, Positions, Merge, Document, PointGraphic, Renderer],
};
