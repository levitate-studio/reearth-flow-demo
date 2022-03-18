import DataTypeAlias from "./DataTypeAlias";

const internalDataTypes = [
  "boolean",
  "booleanArray",
  "booleanSpread",
  "string",
  "stringArray",
  "stringSpread",
  "number",
  "numberArray",
  "numberSpread",
  "object",
  "objectArray",
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
      allowed = ["boolean", "booleanArray", "booleanSpread"];
      break;
    case "booleanArray":
      allowed = ["booleanArray", "booleanSpread"];
      break;
    case "booleanSpread":
      allowed = ["booleanSpread"];
      break;
    case "string":
      allowed = ["string", "stringArray", "stringSpread"];
      break;
    case "stringArray":
      allowed = ["stringArray", "stringSpread"];
      break;
    case "stringSpread":
      allowed = ["stringSpread"];
      break;
    case "number":
      allowed = ["number", "numberArray", "numberSpread"];
      break;
    case "numberArray":
      allowed = ["numberArray", "numberSpread"];
      break;
    case "numberSpread":
      allowed = ["numberSpread"];
      break;
    case "object":
      allowed = ["object", "objectArray", "objectSpread"];
      break;
    case "objectArray":
      allowed = ["objectArray", "objectSpread"];
      break;
    case "objectSpread":
      allowed = ["objectSpread"];
      break;
    default:
      break;
  }
  return allowed.includes(targetDataType);
};
