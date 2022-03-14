// =======================================
// GUID
// =======================================
const S4 = () => {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
};
export const createGUID = () => {
  return `${S4()}${S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`;
};

// =======================================
// Auto increasing ID
// =======================================
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

// =======================================
// Update Node
// =======================================
export const updateNode = (node: any, output: string, inputs: string[]) => {
  const inputValues: any = [];
  inputs.forEach((input) => {
    inputValues.push(node.getPortInByName(input)?.getValue());
  });
  node.getPortOutByName(output)?.setValue(node.rule.apply(null, inputValues));
};

// =======================================
// Spread
// =======================================
export const spreadData = (data: any) => {
  return Array.isArray(data) || data === undefined ? data : [data];
};

// =======================================
// Package Spread Composite Value
// =======================================
export const packageSpreadCompositeValues = (
  props: any,
  packageType: "object" | "array",
  objKey: string
) => {
  const spreadProps: any = {};
  const spreadLength: number[] = [];
  Object.keys(props).forEach((propName) => {
    if (props[propName]) {
      spreadProps[propName] = spreadData(props[propName]);
      spreadLength.push(spreadProps[propName].length);
    }
  });
  const maxLength = Math.max(...spreadLength);
  const outputSpread: any = [];
  for (let i = 0; i < maxLength; i += 1) {
    let ele: any;
    if (packageType === "object") {
      ele = {};
      Object.keys(spreadProps).forEach((propName: string) => {
        ele[propName] = spreadProps[propName][i % spreadProps[propName].length];
      });
    } else if (packageType === "array") {
      ele = [];
      Object.keys(spreadProps).forEach((propName: string) => {
        ele.push(spreadProps[propName][i % spreadProps[propName].length]);
      });
    }
    //
    const current: any = {};
    current[objKey] = ele;
    outputSpread.push(current);
  }
  return outputSpread;
};

// =======================================
// Package Spread Value
// =======================================
export const packageSpreadValue = (props: any) => {
  const spreadProps: any = {};
  const spreadLength: number[] = [];
  Object.keys(props).forEach((propName) => {
    if (props[propName] !== undefined) {
      spreadProps[propName] = spreadData(props[propName]);
      spreadLength.push(spreadProps[propName].length);
    }
  });
  const maxLength = Math.max(...spreadLength);
  const outputSpread: any = [];
  for (let i = 0; i < maxLength; i += 1) {
    const ele: any = {};
    Object.keys(spreadProps).forEach((propName: string) => {
      ele[propName] = spreadProps[propName][i % spreadProps[propName].length];
    });
    outputSpread.push(ele);
  }
  return outputSpread;
};
