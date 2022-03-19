import And from "./And";
import Not from "./Not";
import Or from "./Or";
import Xor from "./Xor";

export default {
  _id: "BooleanSpread",
  children: [Not, And, Or, Xor],
};
