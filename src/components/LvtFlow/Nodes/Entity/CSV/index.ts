import SelectColumn from "./SelectColumn";
import SelectMultiColumn from "./SelectMultiColumn";
import Writer from "./Writer";

export default {
  _id: "CSV",
  children: [SelectColumn, SelectMultiColumn, Writer],
};
