import { LvtNodeDef } from "../../../Core/LvtNode";

const CZMLPoints: LvtNodeDef = {
  _id: "CZMLPoints",
  ui: {
    title: "CzmlPoints",
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
        {
          id: "2",
          name: "Amanohashidate",
          description: "ここは天橋立です",
          position: {
            cartographicDegrees: [135.19, 35.567, 100],
          },
          point: {
            color: {
              rgba: [0, 255, 0, 255],
            },
            pixelSize: 8,
          },
        },
        {
          id: "3",
          name: "Miyajima",
          description: "ここは宮島です",
          position: {
            cartographicDegrees: [132.318, 34.297, 100],
          },
          point: {
            color: {
              rgba: [0, 0, 255, 255],
            },
            pixelSize: 8,
          },
        },
      ],
    },
  ],
};

export default CZMLPoints;
