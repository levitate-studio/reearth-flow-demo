const NumberInput = {
  public: {
    nodeId: "Input.Number",
    category: "Input",
    title: "Number",
    des: "Node description for Input.NumberInput",
  },
  portsIn: [],
  portsOut: [
    {
      name: "value",
      type: "number",
      component: "numberInput",
      des: "value: output the number",
    },
  ],
};

export default NumberInput;
