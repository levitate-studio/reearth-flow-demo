import BooleanRadio from "./BooleanRadio";
import FileCSVInput from "./FileCSVInput";
import FileCSVWriter from "./FileCSVWriter";
import Input from "./Input";
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
  Input,
  BooleanRadio,
  FileCSVWriter,
};

export default NodeValueComponents;
