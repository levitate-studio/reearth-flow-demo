import BasicNode from "./BasicNode";
import { NumberAddNodeData } from "./NumberAdd";
import { NumberInputNodeData } from "./NumberInput";

const _nodes = [NumberInputNodeData, NumberAddNodeData];

const datas: any = {};

_nodes.forEach((n) => {
  datas[n.nodeId] = n;
});

export { datas };

export const types = {
  basicNode: BasicNode,
};
