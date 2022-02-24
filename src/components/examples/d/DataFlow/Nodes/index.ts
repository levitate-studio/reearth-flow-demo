import BasicNode from "./_NodeUI/BasicNode";
//
import RandomPoint from "./GeoJSON.Turf/RandomPoint";
import GeoJSONRenderer from "./GeoJSON/GeoJSONRenderer";
import NumberInput from "./Input/NumberInput";
import NumberAdd from "./Ops/NumberAdd";

export const types = {
  basicNode: BasicNode,
};

export const nodeDefs = [NumberInput, NumberAdd, GeoJSONRenderer, RandomPoint];

export const nodeCategories = ["Input", "Ops", "GeoJSON", "GeoJSON.Turf"];
