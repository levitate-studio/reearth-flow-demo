import { useMemo, useEffect, useState } from "react";
import "./df-toolbar-panel.css";
import useFetch from "use-http";

interface Props {
  popupExportProjectWindow: any;
  popupImportProjectWindow: any;
  popupExportCZMLWindow: any;
  loadProjectFromUrl: any;
  clearData: any;
  saveToLocalStorage: any;
  loadFromLocalStorage: any;
}

const ToolbarPanel = (Props: Props) => {
  const [examples, setExamples] = useState([]);
  const { get, response } = useFetch();
  const [activeMenu, setActiveMenu] = useState("");

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
      return examples.map(
        (group: any, index: number) =>
          group.examples.length > 0 && (
            <div className="menu-list-group" key={index}>
              <div className="menu-list-group-title">{group.groupTitle}</div>
              <ul>
                {group.examples.map((example: any, index: number) => (
                  <li
                    className="menu-item"
                    key={index}
                    onClick={() => {
                      setActiveMenu("");
                      Props.loadProjectFromUrl(example["url"]);
                    }}
                  >
                    {example["title"]}
                  </li>
                ))}
              </ul>
            </div>
          )
      );
    }
  }, [Props, examples]);

  return (
    <div className="df-toolbar-panel">
      <div className="df-block-title">
        <div
          className={`df-block-title-tab logo ${
            activeMenu === "Project" ? "on" : ""
          }`}
          onMouseEnter={() => {
            setActiveMenu("Project");
          }}
          onMouseLeave={() => {
            setActiveMenu("");
          }}
        >
          <span className="menu-title">DATAFLOW</span>
          <div className="menu">
            <div className="menu-list-group">
              <div className="menu-list-group-title">Project</div>
              <ul>
                <li
                  className="menu-item"
                  onClick={() => {
                    setActiveMenu("");
                    Props.clearData();
                  }}
                >
                  New
                </li>
                <li className="menu-sep"></li>
                <li
                  className="menu-item"
                  onClick={() => {
                    setActiveMenu("");
                    Props.saveToLocalStorage();
                  }}
                >
                  Local Save
                </li>
                <li
                  className="menu-item"
                  onClick={() => {
                    setActiveMenu("");
                    Props.loadFromLocalStorage();
                  }}
                >
                  Local Resume
                </li>
                <li className="menu-sep"></li>
                <li
                  className="menu-item"
                  onClick={() => {
                    setActiveMenu("");
                    Props.popupImportProjectWindow();
                  }}
                >
                  Import JSON/URL
                </li>
                <li
                  className="menu-item"
                  onClick={() => {
                    setActiveMenu("");
                    Props.popupExportProjectWindow();
                  }}
                >
                  Export JSON
                </li>
              </ul>
            </div>
            <div className="menu-list-group">
              <div className="menu-list-group-title">Output</div>
              <ul>
                <li
                  className="menu-item"
                  onClick={() => {
                    setActiveMenu("");
                    Props.popupExportCZMLWindow();
                  }}
                >
                  Export Data
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className={`df-block-title-tab ${
            activeMenu === "Examples" ? "on" : ""
          }`}
          onMouseEnter={() => {
            setActiveMenu("Examples");
          }}
          onMouseLeave={() => {
            setActiveMenu("");
          }}
        >
          Examples
          <div className="menu">{examplesList}</div>
        </div>
      </div>
    </div>
  );
};

export default ToolbarPanel;
