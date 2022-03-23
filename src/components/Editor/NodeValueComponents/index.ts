import BooleanRadio from "./BooleanRadio";
import Checkbox from "./Checkbox";
import FileCSVInput from "./FileCSVInput";
import FileCSVWriter from "./FileCSVWriter";
import Input from "./Input";
import MultiRadio from "./MultiRadio";
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
  Checkbox,
  MultiRadio,
};

export default NodeValueComponents;
