import { getPortInValue, getPortOutValueObj } from "../../Common/AssistFns";

const FileCSV = {
  public: {
    title: "FileCSV",
    des: "",
  },
  portsIn: [
    {
      name: "file",
      type: "file",
      component: "FileCSVInput",
      des: "",
      hidden: true,
    },
  ],
  portsOut: [
    {
      name: "data",
      type: "csvData",
      component: "OutputSource",
      defaultValue: [],
      des: "",
    },
  ],
  update: (data: any) => {
    const inputValue = getPortInValue(data, "file");
    const output = getPortOutValueObj(data, "data");
    output.v = inputValue;
  },
};

export default FileCSV;
