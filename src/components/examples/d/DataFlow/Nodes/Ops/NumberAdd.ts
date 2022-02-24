const NumberAdd = {
  public: {
    nodeId: "Ops.NumberAdd",
    category: "Ops",
    title: "Add",
    des: "Node description for Ops.NumberAdd",
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
      component: "pureDisplay",
      des: "value: output the sum of two inputs",
    },
  ],
  update: (data: any) => {
    data.portsOut.find((port: any) => port.name === "value").value.v =
      Number(
        data.portsIn.find((port: any) => port.name === "number0").value.v
      ) +
      Number(data.portsIn.find((port: any) => port.name === "number1").value.v);
  },
};

export default NumberAdd;
