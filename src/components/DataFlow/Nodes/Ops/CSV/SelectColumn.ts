import { getPortInValue, getPortOutValueObj } from "../../../Common/AssistFns";

const SelectColumn = {
  public: {
    title: "SelectColumn",
    des: "",
  },
  portsIn: [
    {
      name: "csvData",
      type: "csvData",
      component: "OutputSource",
      des: "",
    },
    {
      name: "column",
      type: "number",
      des: "",
      component: "Select",
      options: {
        columnSource: "csvData",
      },
      defaultValue: 0,
    },
  ],
  portsOut: [
    {
      name: "output",
      type: "array",
      component: "OutputSource",
      des: "",
    },
  ],
  update: (data: any) => {
    const csvData = getPortInValue(data, "csvData");
    const index = getPortInValue(data, "column");
    const output = getPortOutValueObj(data, "output");
    const _temp = [];
    for (let i = 1; i < csvData.length; i += 1) {
      _temp.push(csvData[i][index]);
    }
    output.v = _temp;
  },
};

export default SelectColumn;
