import DivideSpread from "./DivideSpread";
import FlatSpread from "./FlatSpread";
import MinusSpread from "./MinusSpread";
import MultiplySpread from "./MultiplySpread";
import Plus from "./Plus";
import PlusSpread from "./PlusSpread";
import Vector2 from "./Vector2";
import Vector2Spread from "./Vector2Spread";
import Vector3Spread from "./Vector3Spread";
import Vector4Spread from "./Vector4Spread";

export default {
  _id: "Number",
  children: [
    Plus,
    PlusSpread,
    MinusSpread,
    MultiplySpread,
    DivideSpread,
    FlatSpread,
    Vector2,
    Vector2Spread,
    Vector3Spread,
    Vector4Spread,
  ],
};
