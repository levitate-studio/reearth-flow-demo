import "./df-toolbar-panel.css";

interface Props {
  exportData: any;
  clearData: any;
  importData: any;
}

const ToolbarPanel = (Props: Props) => {
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
        <div className="df-block-title-tab">IMPORT</div>
        <div
          className="df-block-title-tab button"
          onClick={() => {
            Props.importData("demo1");
          }}
        >
          Demo1
        </div>
      </div>
    </div>
  );
};

export default ToolbarPanel;
