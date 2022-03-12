import Document from "./Document";
import PointGraphic from "./PointGraphic";
import Points from "./Points";
import Positions from "./Positions";
import Renderer from "./Renderer";

export default {
  _id: "CZML",
  children: [Points, Positions, Document, PointGraphic, Renderer],
};
