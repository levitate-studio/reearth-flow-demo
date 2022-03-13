import { LvtNodeDef } from "../../../Core/LvtNode";

const CZMLPoint: LvtNodeDef = {
  _id: "CZMLPoint",
  ui: {
    title: "CzmlPoint",
    description: "",
  },
  portsIn: [],
  portsOut: [
    {
      name: "data",
      dataType: "objectArray",
      defaultValue: [
        {
          id: "document",
          name: "Nihon Sankei",
          version: "1.0",
        },
        {
          id: "1",
          name: "Matsusima",
          description: "ここは松島です",
          position: {
            cartographicDegrees: [141.064, 38.366, 100],
          },
          point: {
            color: {
              rgba: [255, 0, 0, 255],
            },
            pixelSize: 8,
          },
        },
      ],
    },
  ],
};

export default CZMLPoint;
