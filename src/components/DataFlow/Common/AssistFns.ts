const S4 = () => {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
};

export const getGUID = () => {
  return (
    S4() +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    S4() +
    S4()
  );
};

export const getPortInValue = (data: any, portName: string) => {
  return data.portsIn.find((port: any) => port.name === portName).value.v;
};
export const getPortOutValueObj = (data: any, portName: string) => {
  return data.portsOut.find((port: any) => port.name === portName).value;
};
