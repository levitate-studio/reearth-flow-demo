export type portType = "input" | "output";

type dataType =
  | "string"
  | "stringArray"
  | "stringSpread"
  | "number"
  | "numberArray"
  | "numberSpread"
  | "array"
  | "spread"
  | "object"
  | "objectArray"
  | "file";

interface source {
  id: string;
  portName: string;
}
interface target {
  id: string;
  portName: string;
}

export interface LvtPortDef {
  name: string;
  dataType: dataType;
  defaultValue?: any;
  isRenderSource?: boolean;
  ui?: {
    title?: string;
    description?: string;
    hidden?: boolean;
    asDefaultOutput?: boolean;
    component?:
      | "PureDisplay"
      | "Input"
      | "NumberInput"
      | "FileCSVInput"
      | "Select"
      | "OutputSource";

    componentOptions?: any;
  };
}

export interface LvtPortOptions extends LvtPortDef {
  portType: portType;
  node: any;
  importedValue?: any;
}

export class LvtPort {
  name: string;
  portType: portType;
  dataType: dataType;
  ui: any;
  defaultValue: any;
  value: {
    v: any;
  };
  isRenderSource?: boolean;
  connected: boolean;
  source?: source | undefined;
  targets?: Array<target>;
  // node: any;

  static getPortDefaultValue(type: dataType, defaultValue: any) {
    if (defaultValue !== undefined) {
      return defaultValue;
    }
    return undefined;
    switch (type) {
      case "number":
      default:
        return 0;
      case "string":
        return "";
      case "array":
      case "numberArray":
      case "stringArray":
      case "objectArray":
        return [];
      case "spread":
      case "numberSpread":
      case "stringSpread":
        return [[]];
      case "object":
        return {};
    }
  }

  static getPortDefaultCompnent(type: dataType, component: string | undefined) {
    if (component) {
      return component;
    }
    switch (type) {
      case "number":
        return "NumberInput";
      case "string":
        return "Input";
      default:
        return "OutputSource";
    }
  }

  constructor(options: LvtPortOptions) {
    this.name = options.name;
    this.portType = options.portType;
    this.dataType = options.dataType;
    this.ui = {
      component: LvtPort.getPortDefaultCompnent(
        options.dataType,
        options.ui?.component
      ),
      componentOptions: options.ui?.componentOptions,
      description: options.ui?.description,
    };
    this.defaultValue = LvtPort.getPortDefaultValue(
      options.dataType,
      options.defaultValue
    );
    this.value = {
      v: options.importedValue ? options.importedValue : this.defaultValue,
    };
    this.connected = false;
    // Edges
    if (this.portType === "input") {
      this.source = undefined;
    } else if (this.portType === "output") {
      this.targets = [];
    }
    this.isRenderSource = options.isRenderSource;
    // node ref
    // this.node = options.node;
  }

  // =======================================
  // value methods
  // =======================================
  getValue() {
    return this.value.v;
  }
  getValueObj() {
    return this.value;
  }
  setValue(value: any) {
    this.value.v = value;
  }
  resetValue() {
    this.value = {
      v: this.defaultValue,
    };
  }
  cloneValue(sourceValue: any) {
    this.value = {
      ...sourceValue,
    };
  }
  setValueObj(valueObj: any) {
    this.value = valueObj;
  }

  // =======================================
  // edge methods
  // =======================================
  setSource(source: source) {
    if (source) {
      this.source = source;
      this.connected = true;
    } else {
      this.source = undefined;
      this.connected = false;
    }
  }
  removeSource() {
    this.source = undefined;
    this.connected = false;
  }

  addTarget(target: target) {
    if (
      !this.targets?.find(
        (t) => t.id === target.id && t.portName === target.portName
      )
    ) {
      this.targets?.push(target);
    }
    this.connected = true;
  }
  removeTarget(target: target) {
    if (this.targets) {
      for (let i = 0; i < this.targets?.length; i += 1) {
        if (
          this.targets[i].id === target.id &&
          this.targets[i].portName === target.portName
        ) {
          this.targets.splice(i, 1);
          break;
        }
      }
      this.connected = this.targets.length > 0;
    } else {
      this.connected = false;
    }
  }
}
