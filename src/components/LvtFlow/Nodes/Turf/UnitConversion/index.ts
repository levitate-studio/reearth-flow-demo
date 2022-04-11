import BearingToAzimuth from "./BearingToAzimuth"
import ConvertArea from "./ConvertArea"
import ConvertLength from "./ConvertLength"
import DegreesToRadians from "./DegreesToRadians"
import LengthToRadians from "./LengthToRadians"
import LengthToDegrees from "./LengthToDegrees"
import RadiansToLength from "./RadiansToLength"
import RadiansToDegrees from "./RadiansToDegrees"
import ToMercator from "./ToMercator"
import ToMercatorOptions from "./ToMercatorOptions"
import ToWgs84 from "./ToWgs84"
import ToWgs84Options from "./ToWgs84Options"

export default {
  _id: "UnitConversion",
  children: [
    BearingToAzimuth,
    ConvertArea,
    ConvertLength,
    DegreesToRadians,
    LengthToRadians,
    LengthToDegrees,
    RadiansToLength,
    RadiansToDegrees,
    ToMercator,
    ToMercatorOptions,
    ToWgs84,
    ToWgs84Options
  ],
};
  