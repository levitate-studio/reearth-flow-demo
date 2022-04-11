import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const ClustersKmeansOptions: LvtNodeDef = {
  _id: "ClustersKmeansOptions",
  ui: {
    title: "ClustersKmeansOptions",
    description: "Options of ClustersKmeans",
  },
  portsIn: [
    {
      name: "numberOfClusters",
      dataType: "number",
    },{
      name: "mutate",
      dataType: "boolean",
    },
  ],
  portsOut: [
    {
      name: "ClustersKmeansOptions",
      dataType: "object",
    },
  ],
  rule: (_numberOfClusters: any, _mutate: any) => {
    return packageSpreadValue(
      { _numberOfClusters, _mutate }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "ClustersKmeansOptions", ["numberOfClusters", "mutate"]);
    return node;
  },
};

export default ClustersKmeansOptions;