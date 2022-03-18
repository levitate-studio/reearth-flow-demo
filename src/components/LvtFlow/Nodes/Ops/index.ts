import Color from "./Color";
import Number from "./Number";
import NumberArray from "./NumberArray";
import NumberSpread from "./NumberSpread";
import String from "./String";
import StringArray from "./StringArray";

export default {
  _id: "Ops",
  children: [Number, NumberArray, NumberSpread, String, StringArray, Color],
};
