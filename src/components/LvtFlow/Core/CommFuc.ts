const S4 = () => {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
};
export const createGUID = () => {
  return `${S4()}${S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`;
};

const createIdFucCreator = () => {
  let id = 1;
  return {
    getId: () => {
      return id++;
    },
    setId: (i: number) => {
      id = i;
    },
  };
};

export const idCreator = createIdFucCreator();

export const spreadData = (data: any) => {
  return Array.isArray(data) ? data : [data];
};

export const updateNode = (node: any, output: string, inputs: string[]) => {
  const inputValues: any = [];
  inputs.forEach((input) => {
    inputValues.push(node.getPortInByName(input)?.getValue());
  });
  node.getPortOutByName(output)?.setValue(node.rule.apply(null, inputValues));
};
