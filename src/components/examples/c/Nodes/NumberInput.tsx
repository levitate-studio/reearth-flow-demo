const NumberInputNode = {
  nodeId: "numberInput",
  nodeType: "basicNode",
  ui: {
    title: "Number Input",
  },

  create: () => {
    return {
      nodeId: "numberInput",
      nodeType: "basicNode",
      ui: {
        title: "Number Input",
      },
      portsIn: [],
      portsOut: [
        {
          name: "value",
          value: {
            v: 0,
          },
          valueComp: "numberInput",
          targets: [],
        },
      ],
    };
  },
};

export { NumberInputNode };
