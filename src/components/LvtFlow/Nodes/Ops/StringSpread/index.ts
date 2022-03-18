import AsNumber from "./AsNumber";
import GetIndex from "./GetIndex";
import Limit from "./Limit";
import Select from "./Select";

export default {
  _id: "StringSpread",
  children: [AsNumber, GetIndex, Limit, Select],
};
