const NumberInput = {
  public: {
    nodeId: "Input.NumberInput",
    category: "Input",
    title: "Number Input",
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
