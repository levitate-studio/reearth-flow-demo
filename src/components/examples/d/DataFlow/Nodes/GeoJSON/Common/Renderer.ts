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
      component: "outputSource",
    },
  ],
  portsOut: [],
};

export default Renderer;
