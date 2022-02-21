const NumberAddNode = {
  nodeId: "numberAdd",
  nodeType: "basicNode",
  ui: {
    title: "Number Add",
  },

  update: (data: any) => {
    data.portsOut.find((port: any) => port.name === "value").value.v =
      Number(data.portsIn.find((port: any) => port.name === "in0").value.v) +
      Number(data.portsIn.find((port: any) => port.name === "in1").value.v);
    // console.log("add");
  },

  create: () => {
    return {
      nodeId: "numberAdd",
      nodeType: "basicNode",
      ui: {
        title: "Number Add",
      },
      portsIn: [
        {
          name: "in0",
          value: {
            v: 0,
          },
          valueComp: "numberInput",
        },
        {
          name: "in1",
          value: {
            v: 0,
          },
          valueComp: "numberInput",
        },
      ],
      portsOut: [
        {
          name: "value",
          valueComp: "pureDisplay",
          value: {
            v: 0,
          },
          targets: [],
        },
      ],
    };
  },
};

export { NumberAddNode };
