const GeoJSONRenderer = {
  public: {
    nodeId: "GeoJSON.Renderer",
    category: "GeoJSON",
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

export default GeoJSONRenderer;
