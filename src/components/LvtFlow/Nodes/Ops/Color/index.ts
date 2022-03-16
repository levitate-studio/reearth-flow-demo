import HexToRGBA from "./HexToRGBA";
import HexToRGBAObj from "./HexToRGBAObj";
import HSLAToRGBA from "./HSLAToRGBA";

export default {
  _id: "Color",
  children: [HexToRGBA, HSLAToRGBA, HexToRGBAObj],
};
