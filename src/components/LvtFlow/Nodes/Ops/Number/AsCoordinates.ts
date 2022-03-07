import { getPortInValue, getPortOutValueObj } from "../../../Core/AssistFns";

const AsCoordinates = {
  public: {
    title: "AsCoordinates",
    des: "",
  },
  portsIn: [
    {
      name: "longitude",
      type: "array",
      component: "OutputSource",
      des: "",
    },
    {
      name: "latitude",
      type: "array",
      component: "OutputSource",
      des: "",
    },
  ],
  portsOut: [
    {
      name: "coordinates",
      type: "array",
      component: "OutputSource",
      des: "",
    },
  ],
  update: (data: any) => {
    const longitude = getPortInValue(data, "longitude");
    const latitude = getPortInValue(data, "latitude");
    const coordinates = getPortOutValueObj(data, "coordinates");
    const _temp = [];
    for (let i = 0; i < longitude.length; i += 1) {
      _temp.push([Number(longitude[i]), Number(latitude[i])]);
    }
    coordinates.v = _temp;
  },
};

export default AsCoordinates;
