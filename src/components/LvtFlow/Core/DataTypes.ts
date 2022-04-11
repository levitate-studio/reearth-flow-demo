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
  "any",
];

export const getInternalDataType = (dataType: string) => {
  if (internalDataTypes.indexOf(dataType) !== -1) {
    return dataType;
  } else if (Object.keys(DataTypeAlias).indexOf(dataType) !== -1) {
    return (DataTypeAlias as any)[dataType];
  } else {
    return dataType;
  }
};

export const dataTransforValid = (
  sourceDataType: string,
  targetDataType: string
) => {
  // allow all turf types for now
  const sourceNS = sourceDataType.split(".")[0];
  const targetNS = targetDataType.split(".")[0];
  if (sourceNS === "Turf" || targetNS === "Turf") {
    return true;
  }
  if (sourceNS === "any" || targetNS === "any") {
    return true;
  }
  // strict rules
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
