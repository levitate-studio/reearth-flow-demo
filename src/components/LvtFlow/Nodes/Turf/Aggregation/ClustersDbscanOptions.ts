import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const ClustersDbscanOptions: LvtNodeDef = {
  _id: "ClustersDbscanOptions",
  ui: {
    title: "ClustersDbscanOptions",
    description: "Options of ClustersDbscan",
  },
  portsIn: [
    {
      name: "units",
      dataType: "string",
    },{
      name: "mutate",
      dataType: "boolean",
    },{
      name: "minPoints",
      dataType: "number",
    },
  ],
  portsOut: [
    {
      name: "ClustersDbscanOptions",
      dataType: "object",
    },
  ],
  rule: (_units: any, _mutate: any, _minPoints: any) => {
    return packageSpreadValue(
      { _units, _mutate, _minPoints }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "ClustersDbscanOptions", ["units", "mutate", "minPoints"]);
    return node;
  },
};

export default ClustersDbscanOptions;