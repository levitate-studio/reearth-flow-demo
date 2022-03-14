import "./df-toolbar-panel.css";

interface Props {
  exportData: any;
  clearData: any;
  loadData: any;
  checkCZML: any;
}

const ToolbarPanel = (Props: Props) => {
  const examples = [
    { title: "CZML Point", url: "/examples/czml-point.json" },
    { title: "CZML Billboard", url: "/examples/czml-billboard.json" },
    { title: "CzmlLib Point", url: "/examples/czmllib-point.json" },
    { title: "CzmlLib Box", url: "/examples/czmllib-box.json" },
    { title: "CzmlLib Corridor", url: "/examples/czmllib-corridor.json" },
    { title: "GeoJSON MultiPoint", url: "/examples/geojson-multipoint.json" },
    { title: "DEV Test", url: "/examples/dev-test.json" },
  ];
  const examplesList = examples.map((example, index) => (
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
  return (
    <div className="df-toolbar-panel">
      <div className="df-block-title">
        <div className="df-block-title-tab logo">DATAFLOW</div>
        <div className="df-block-title-tab button" onClick={Props.exportData}>
          EXPORT
        </div>
        <div className="df-block-title-tab button" onClick={Props.clearData}>
          CLEAR
        </div>
        <div className="df-block-title-tab">
          Examples
          <ul className="menu">{examplesList}</ul>
        </div>
        <div className="df-block-title-tab button" onClick={Props.checkCZML}>
          CZML
        </div>
      </div>
    </div>
  );
};

export default ToolbarPanel;
