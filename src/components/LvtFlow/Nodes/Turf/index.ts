import Measurement from "./Measurement"
import CoordinateMutation from "./CoordinateMutation"
import Transformation from "./Transformation"
import FeatureConversion from "./FeatureConversion"
import Misc from "./Misc"
import Helper from "./Helper"
import Random from "./Random"
import Data from "./Data"
import Interpolation from "./Interpolation"
import Joins from "./Joins"
import Grids from "./Grids"
import Classification from "./Classification"
import Aggregation from "./Aggregation"
import Meta from "./Meta"
import Assertions from "./Assertions"
import Booleans from "./Booleans"
import UnitConversion from "./UnitConversion"

export default {
  _id: "Turf",
  children: [
    Measurement,
    CoordinateMutation,
    Transformation,
    FeatureConversion,
    Misc,
    Helper,
    Random,
    Data,
    Interpolation,
    Joins,
    Grids,
    Classification,
    Aggregation,
    Meta,
    Assertions,
    Booleans,
    UnitConversion
  ],
};
  