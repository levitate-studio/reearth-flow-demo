// export { default as NumberInput } from "./NumberInput";
// export { default as PureDisplay } from "./PureDisplay";
// export { default as OutputSource } from "./OutputSource";
// export { default as FileCSVInput } from "./FileCSVInput";
// export { default as Select } from "./Select";

import FileCSVInput from "./FileCSVInput";
import NumberInput from "./NumberInput";
import OutputSource from "./OutputSource";
import PureDisplay from "./PureDisplay";
import Select from "./Select";

interface INodeValueComponent {
  [key: string]: any;
}

const NodeValueComponents: INodeValueComponent = {
  NumberInput,
  PureDisplay,
  FileCSVInput,
  Select,
  OutputSource,
};

export default NodeValueComponents;
