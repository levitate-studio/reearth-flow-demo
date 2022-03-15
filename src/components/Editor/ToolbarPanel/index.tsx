import { useMemo } from "react";
import "./df-toolbar-panel.css";

interface Props {
  exportData: any;
  clearData: any;
  loadData: any;
  checkCZML: any;
}

const ToolbarPanel = (Props: Props) => {
  const examplesList = useMemo(() => {
    const examples = [
      { title: "CZML Point", url: "/examples/czml-point.json" },
      { title: "CZML Billboard", url: "/examples/czml-billboard.json" },
      { title: "CzmlLib Point", url: "/examples/czmllib-point.json" },
      { title: "CzmlLib Box", url: "/examples/czmllib-box.json" },
      { title: "CzmlLib Corridor", url: "/examples/czmllib-corridor.json" },
      { title: "GeoJSON MultiPoint", url: "/examples/geojson-multipoint.json" },
      { title: "DEV Test", url: "/examples/dev-test.json" },
    ];

    return examples.map((example, index) => (
      <li
        className="menu-item"
        key={index}
        onClick={() => {
          Props.loadData(example.url);
        }}
      >
        {example.title}
      </li>
    ));
  }, [Props]);

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
