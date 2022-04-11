import CleanCoords from "./CleanCoords"
import CleanCoordsOptions from "./CleanCoordsOptions"
import Flip from "./Flip"
import FlipOptions from "./FlipOptions"
import Rewind from "./Rewind"
import RewindOptions from "./RewindOptions"
import Round from "./Round"
import Truncate from "./Truncate"
import TruncateOptions from "./TruncateOptions"

export default {
  _id: "CoordinateMutation",
  children: [
    CleanCoords,
    CleanCoordsOptions,
    Flip,
    FlipOptions,
    Rewind,
    RewindOptions,
    Round,
    Truncate,
    TruncateOptions
  ],
};
  