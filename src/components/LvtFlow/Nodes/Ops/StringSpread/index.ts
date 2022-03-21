import AsNumber from "./AsNumber";
import Equal from "./Equal";
import Filter from "./Filter";
import GetIndex from "./GetIndex";
import IsEmpty from "./isEmpty";
import LeftJoin from "./LeftJoin";
import Limit from "./Limit";
import Select from "./Select";

export default {
  _id: "StringSpread",
  children: [
    AsNumber,
    GetIndex,
    IsEmpty,
    Limit,
    Select,
    Filter,
    LeftJoin,
    Equal,
  ],
};
