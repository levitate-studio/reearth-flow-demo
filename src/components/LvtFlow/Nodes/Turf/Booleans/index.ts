import BooleanClockwise from "./BooleanClockwise"
import BooleanConcave from "./BooleanConcave"
import BooleanContains from "./BooleanContains"
import BooleanCrosses from "./BooleanCrosses"
import BooleanDisjoint from "./BooleanDisjoint"
import BooleanEqual from "./BooleanEqual"
import BooleanOverlap from "./BooleanOverlap"
import BooleanParallel from "./BooleanParallel"
import BooleanPointInPolygon from "./BooleanPointInPolygon"
import BooleanPointInPolygonOptions from "./BooleanPointInPolygonOptions"
import BooleanPointOnLine from "./BooleanPointOnLine"
import BooleanPointOnLineOptions from "./BooleanPointOnLineOptions"
import BooleanWithin from "./BooleanWithin"

export default {
  _id: "Booleans",
  children: [
    BooleanClockwise,
    BooleanConcave,
    BooleanContains,
    BooleanCrosses,
    BooleanDisjoint,
    BooleanEqual,
    BooleanOverlap,
    BooleanParallel,
    BooleanPointInPolygon,
    BooleanPointInPolygonOptions,
    BooleanPointOnLine,
    BooleanPointOnLineOptions,
    BooleanWithin
  ],
};
  