//
// import * as GeoJSON from "./GeoJSON";
import * as Ops from "./Ops";
// import * as Source from "./Source";

// const nodeTree = { Source, Ops, GeoJSON };
const nodeTree = { Ops };

const nodeDefs: any = [];
const nodeMap: any = [];

const flatTree = (ele: any, key: any, map: any, prefix: string) => {
  const id = key ? (prefix ? `${prefix}-${key}` : key) : ``;
  if (ele.public) {
    // set node id
    ele.public.nodeId = id;
    // set node category
    ele.public.category = prefix;
    // add to refs
    nodeDefs[id] = ele;
    // add to map
    map.push(id);
  } else {
    if (key && !map[key]) {
      map[key] = [];
    }
    Object.keys(ele).forEach((cat) => {
      const currentMap = key ? map[key] : map;
      flatTree(ele[cat], cat, currentMap, id);
    });
  }
};

flatTree(nodeTree, null, nodeMap, "");

console.log(nodeDefs, nodeMap);

export { nodeDefs, nodeMap };
