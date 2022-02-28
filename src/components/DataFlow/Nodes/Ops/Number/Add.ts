import { getPortInValue, getPortOutValueObj } from "../../../Common/AssistFns";

const Add = {
  public: {
    title: "Add",
    des: "",
  },
  portsIn: [
    {
      name: "number0",
      type: "number",
      des: "number0: accept a number",
    },
    {
      name: "number1",
      type: "number",
      des: "number1: accept a number",
    },
  ],
  portsOut: [
    {
      name: "value",
      type: "number",
      component: "PureDisplay",
      des: "value: output the sum of two inputs",
    },
  ],
  update: (data: any) => {
    const number0 = getPortInValue(data, "number0");
    const number1 = getPortInValue(data, "number1");
    const output = getPortOutValueObj(data, "value");
    output.v = number0 + number1;
  },
};

export default Add;
