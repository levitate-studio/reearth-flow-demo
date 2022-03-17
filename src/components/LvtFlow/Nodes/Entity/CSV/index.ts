import LeftJoin from "./LeftJoin";
import SelectColumn from "./SelectColumn";

export default {
  _id: "CSV",
  children: [SelectColumn, LeftJoin],
};
