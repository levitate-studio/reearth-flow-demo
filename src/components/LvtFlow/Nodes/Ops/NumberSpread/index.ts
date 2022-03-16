import Divide from "./Divide";
import Flat from "./Flat";
import Minus from "./Minus";
import Multiply from "./Multiply";
import Plus from "./Plus";
import Vector2 from "./Vector2";
import Vector3 from "./Vector3";
import Vector4 from "./Vector4";

export default {
  _id: "NumberSpread",
  children: [Plus, Minus, Multiply, Divide, Flat, Vector2, Vector3, Vector4],
};
