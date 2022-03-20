import DataTypeAlias from "./DataTypeAlias";

const internalDataTypes = [
  "boolean",
  "booleanSpread",
  "string",
  "stringSpread",
  "number",
  "numberSpread",
  "object",
  "objectSpread",
];

export const getInternalDataType = (dataType: string) => {
  if (internalDataTypes.indexOf(dataType) !== -1) {
    return dataType;
  } else {
    return (DataTypeAlias as any)[dataType];
  }
};

export const dataTransforValid = (
  sourceDataType: string,
  targetDataType: string
) => {
  let allowed: string[] = [];
  switch (sourceDataType) {
    case "boolean":
    case "booleanSpread":
      allowed = ["boolean", "booleanSpread"];
      break;
    case "string":
    case "stringSpread":
      allowed = ["string", "stringSpread"];
      break;
    case "number":
    case "numberSpread":
      allowed = ["number", "numberSpread"];
      break;
    case "object":
    case "objectSpread":
      allowed = ["object", "objectSpread"];
      break;
    default:
      break;
  }
  return allowed.includes(targetDataType);
};
