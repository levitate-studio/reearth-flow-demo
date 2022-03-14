import HexToRGBA from "./HexToRGBA";
import HexToRGBAObj from "./HexToRGBAObj";
import RGBA from "./RGBA";

export default {
  _id: "Color",
  children: [RGBA, HexToRGBA, HexToRGBAObj],
};
