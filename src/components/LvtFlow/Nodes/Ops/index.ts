import Color from "./Color";
import Number from "./Number";
import NumberSpread from "./NumberSpread";
import String from "./String";
import StringSpread from "./StringSpread";

export default {
  _id: "Ops",
  children: [Number, NumberSpread, String, StringSpread, Color],
};
