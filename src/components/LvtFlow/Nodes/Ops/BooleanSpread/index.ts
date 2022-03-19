import And from "./And";
import Not from "./Not";
import Or from "./Or";

export default {
  _id: "BooleanSpread",
  children: [Not, And, Or],
};
