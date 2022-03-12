import BasicPacket from "./BasicPacket";
import Billboard from "./Billboard";
import Document from "./Document";
import Merge from "./Merge";
import Mix from "./Mix";
import Point from "./Point";
import PointGraphic from "./PointGraphic";
import Points from "./Points";
import Positions from "./Positions";
import Renderer from "./Renderer";

export default {
  _id: "CZML",
  children: [
    BasicPacket,
    Billboard,
    Point,
    Points,
    Positions,
    Mix,
    Merge,
    Document,
    PointGraphic,
    Renderer,
  ],
};
