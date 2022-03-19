import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Tileset: LvtNodeDef = {
  _id: "Tileset",
  ui: {
    title: "Tileset",
    description: "A 3D Tiles tileset.",
  },
  portsIn: [
    {
      name: "show",
      dataType: "Boolean",
      ui:{
        description: "Whether or not the tileset is shown."
      },
    },{
      name: "uri",
      dataType: "Uri",
      ui:{
        description: "The URI of a 3D tiles tileset. For broadest client compatibility, the URI should be accessible via Cross-Origin Resource Sharing (CORS)."
      },
    },{
      name: "maximumScreenSpaceError",
      dataType: "Double",
      ui:{
        description: "The maximum screen space error used to drive level of detail refinement."
      },
    },
  ],
  portsOut: [
    {
      name: "Tileset",
      dataType: "Tileset",
    },
  ],
  rule: (_show: any, _uri: any, _maximumScreenSpaceError: any) => {
    return packageSpreadValue(
      { _show, _uri, _maximumScreenSpaceError }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "Tileset", ["show", "uri", "maximumScreenSpaceError"]);
    return node;
  },
};

export default Tileset;