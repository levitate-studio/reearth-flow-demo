import BasicPacket from "./BasicPacket";
import Billboard from "./Billboard";
import Document from "./Document";
import Merge from "./Merge";
import Mix from "./Mix";
import Point from "./Point";
import Positions from "./Positions";
import Renderer from "./Renderer";

export default {
  _id: "CZML",
  children: [
    BasicPacket,
    Billboard,
    Point,
    Positions,
    Mix,
    Merge,
    Document,
    Renderer,
  ],
};
