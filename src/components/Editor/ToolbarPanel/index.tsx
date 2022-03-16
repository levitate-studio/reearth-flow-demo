import { useMemo, useEffect, useState } from "react";
import "./df-toolbar-panel.css";
import useFetch from "use-http";

interface Props {
  exportData: any;
  clearData: any;
  loadData: any;
  checkCZML: any;
}

const ToolbarPanel = (Props: Props) => {
  const [examples, setExamples] = useState([]);
  const { get, response } = useFetch();

  useEffect(() => {
    const initExamples = async () => {
      const reqExamples = await get("/examples/index.json");
      if (response.ok) {
        setExamples(reqExamples);
      }
    };
    initExamples();
  }, []);

  const examplesList = useMemo(() => {
    if (examples) {
      return examples.map((example, index): any => (
        <li
          className="menu-item"
          key={index}
          onClick={() => {
            Props.loadData(example["url"]);
          }}
        >
          {example["title"]}
        </li>
      ));
    }
  }, [Props, examples]);

  return (
    <div className="df-toolbar-panel">
      <div className="df-block-title">
        <a className="df-block-title-tab logo" href="/">
          DATAFLOW
        </a>
        <div className="df-block-title-tab">
          File
          <ul className="menu">
            <li className="menu-item" onClick={Props.clearData}>
              New
            </li>
            <li className="menu-sep"></li>
            <li className="menu-item" onClick={Props.exportData}>
              Import
            </li>
            <li className="menu-item" onClick={Props.exportData}>
              Export
            </li>
            <li className="menu-sep"></li>
            <li className="menu-item" onClick={Props.checkCZML}>
              Export CZML
            </li>
          </ul>
        </div>
        <div className="df-block-title-tab">
          Examples
          <ul className="menu">{examplesList}</ul>
        </div>
      </div>
    </div>
  );
};

export default ToolbarPanel;
