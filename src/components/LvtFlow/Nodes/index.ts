import { LvtNodeDef } from "../Core/LvtNode";

import Entity from "./Entity";
import Ops from "./Ops";
import Source from "./Source";
import Turf from "./Turf";

const nodes = {
  children: [Source, Ops, Entity, Turf],
};

// =======================================
// nodeDefs
// generate an object of all nodes defines
// =======================================
const nodeDefs: { [key: string]: LvtNodeDef } = {};

// =======================================
// nodeTree
// generate an tree structured with node
// category
// =======================================
const nodeTree: any = [];

const arrangeNode = (n: any, id: string, tree: any) => {
  const cid = id === "Root" ? "" : id ? `${id}-${n._id}` : n._id;
  if (n.children) {
    let ctree = tree;
    if (n._id) {
      tree[n._id] = [];
      ctree = tree[n._id];
    }
    n.children.forEach((c: any) => {
      arrangeNode(c, cid, ctree);
    });
  } else {
    // is node
    tree.push(cid);
    nodeDefs[cid] = n;
    nodeDefs[cid].nodeId = cid;
    nodeDefs[cid].category = id;
  }
};

arrangeNode(nodes, "Root", nodeTree);

// console.log(nodeDefs, nodeTree);

export { nodeDefs, nodeTree };
