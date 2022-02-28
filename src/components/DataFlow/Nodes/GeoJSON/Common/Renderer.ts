const Renderer = {
  public: {
    title: "Renderer",
    des: "",
    isRenderer: true,
  },
  portsIn: [
    {
      name: "geoJSON",
      type: "geoJSONObject",
      des: "",
      defaultValue: {},
      component: "OutputSource",
    },
  ],
  portsOut: [],
};

export default Renderer;
