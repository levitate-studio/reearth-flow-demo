type portType = "input" | "output";
type dataType = "string" | "number" | "array" | "spread" | "object";
type source = {
  nodeId: string;
  portName: string;
};
type target = {
  nodeId: string;
  portName: string;
};

export type LvtPortDef = {
  name: string;
  dataType: dataType;
  defaultValue?: any;
  ui?: {
    title?: string;
    description?: string;
    component?: "PureDisplay" | "input" | "numberInput" | "outputSource";
    options?: any;
  };
};

export type LvtPortOptions = LvtPortDef & {
  portType: portType;
};

export class LvtPort {
  name: string;
  portType: portType;
  dataType: dataType;
  ui: any;
  value: any;
  connected: boolean;
  source: source | undefined;
  targets: Array<target>;

  static getPortDefaultValue(type: dataType, defaultValue: any) {
    if (defaultValue) {
      return defaultValue;
    }
    switch (type) {
      case "number":
      default:
        return 0;
      case "string":
        return "";
      case "array":
        return "";
      case "spread":
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
      default:
        return "Input";
      case "array":
      case "spread":
      case "object":
        return "outputSource";
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
      description: options.ui?.description,
    };
    this.value = LvtPort.getPortDefaultValue(
      options.dataType,
      options.defaultValue
    );
    this.connected = false;
    this.source = undefined;
    this.targets = [];
  }
}
