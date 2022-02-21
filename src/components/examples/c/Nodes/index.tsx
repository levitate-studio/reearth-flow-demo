import BasicNode from "./BasicNode";
import { NumberAddNode } from "./NumberAdd";
import { NumberInputNode } from "./NumberInput";

const _nodes = [NumberAddNode, NumberInputNode];

const datas: any = {};

_nodes.forEach((n) => {
  datas[n.nodeId] = n;
});

export { datas };

export const types = {
  basicNode: BasicNode,
};
