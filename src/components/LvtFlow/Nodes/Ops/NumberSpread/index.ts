import AsBoolean from "./AsBoolean";
import AsString from "./AsString";
import Divide from "./Divide";
import Expr from "./Expr";
import Flat from "./Flat";
import FlatById from "./FlatById";
import GreaterThan from "./GreaterThan";
import LessThan from "./LessThan";
import Map from "./Map";
import Max from "./Max";
import Min from "./Min";
import Minus from "./Minus";
import Multiply from "./Multiply";
import Plus from "./Plus";
import Ring from "./Ring";
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
    FlatById,
    Vector2,
    Vector3,
    Vector4,
    AsString,
    Map,
    Min,
    Max,
    Expr,
    GreaterThan,
    LessThan,
    AsBoolean,
    Ring,
  ],
};
