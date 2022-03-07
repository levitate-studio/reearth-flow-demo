import { getPortInValue, getPortOutValueObj } from "../../Core/AssistFns";

const Number = {
  public: {
    title: "Number",
    des: "",
  },
  portsIn: [
    {
      name: "input",
      type: "number",
      component: "NumberInput",
      des: "value: output the number",
      hidden: true,
    },
  ],
  portsOut: [
    {
      name: "value",
      type: "number",
      component: "PureDisplay",
      des: "value: output the number",
    },
  ],
  update: (data: any) => {
    const inputValue = getPortInValue(data, "input");
    const output = getPortOutValueObj(data, "value");
    output.v = inputValue;
  },
};

export default Number;
