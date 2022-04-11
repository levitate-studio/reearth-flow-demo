import Interpolate from "./Interpolate"
import InterpolateOptions from "./InterpolateOptions"
import Isobands from "./Isobands"
import IsobandsOptions from "./IsobandsOptions"
import Isolines from "./Isolines"
import IsolinesOptions from "./IsolinesOptions"
import Planepoint from "./Planepoint"
import Tin from "./Tin"

export default {
  _id: "Interpolation",
  children: [
    Interpolate,
    InterpolateOptions,
    Isobands,
    IsobandsOptions,
    Isolines,
    IsolinesOptions,
    Planepoint,
    Tin
  ],
};
  