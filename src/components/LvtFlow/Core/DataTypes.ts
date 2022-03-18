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
      allowed = ["boolean", "booleanSpread"];
      break;
    case "booleanSpread":
      allowed = ["booleanSpread"];
      break;
    case "string":
      allowed = ["string", "stringSpread"];
      break;
    case "stringSpread":
      allowed = ["stringSpread"];
      break;
    case "number":
      allowed = ["number", "numberSpread"];
      break;
    case "numberSpread":
      allowed = ["numberSpread"];
      break;
    case "object":
      allowed = ["object", "objectSpread"];
      break;
    case "objectSpread":
      allowed = ["objectSpread"];
      break;
    default:
      break;
  }
  return allowed.includes(targetDataType);
};
