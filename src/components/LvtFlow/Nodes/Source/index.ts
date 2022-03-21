import Cloud from "./Cloud";
import DatasetOps from "./DatasetOps";
import File from "./File";
import Input from "./Input";
import Sample from "./Sample";

export default {
  _id: "Source",
  children: [Input, Sample, File, Cloud, DatasetOps],
};
