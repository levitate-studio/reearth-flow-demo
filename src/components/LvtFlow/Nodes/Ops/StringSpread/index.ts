import AsNumber from "./AsNumber";
import Distinct from "./Distinct";
import Equal from "./Equal";
import Filter from "./Filter";
import Flat from "./Flat";
import FlatById from "./FlatById";
import GetIndex from "./GetIndex";
import IsEmpty from "./IsEmpty";
import LeftJoin from "./LeftJoin";
import Limit from "./Limit";
import Merge from "./Merge";
import Mix from "./Mix";
import Select from "./Select";
import Sort from "./Sort";
import TimeISO8601 from "./TimeISO8601";

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
    Merge,
    Equal,
    Mix,
    Flat,
    FlatById,
    Distinct,
    Sort,
    TimeISO8601,
  ],
};
