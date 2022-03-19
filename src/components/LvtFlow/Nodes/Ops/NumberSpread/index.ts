import AsString from "./AsString";
import Divide from "./Divide";
import Expr from "./Expr";
import Flat from "./Flat";
import GreaterThan from "./GreaterThan";
import Map from "./Map";
import Max from "./Max";
import Min from "./Min";
import Minus from "./Minus";
import Multiply from "./Multiply";
import Plus from "./Plus";
import Vector2 from "./Vector2";
import Vector3 from "./Vector3";
import Vector4 from "./Vector4";

export default {
  _id: "NumberSpread",
  children: [
    Plus,
    Minus,
    Multiply,
    Divide,
    Flat,
    Vector2,
    Vector3,
    Vector4,
    AsString,
    Map,
    Min,
    Max,
    Expr,
    GreaterThan,
  ],
};
