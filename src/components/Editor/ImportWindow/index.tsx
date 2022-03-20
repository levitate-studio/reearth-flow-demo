import { useState, useImperativeHandle } from "react";

const ImportWindow = ({ importProject, cref }: any) => {
  const [display, setDisplay] = useState(false);
  const [text, setText] = useState("");

  useImperativeHandle(cref, () => ({
    show: () => {
      setDisplay(true);
    },
  }));

  const close = () => {
    setDisplay(false);
    setText("");
  };

  const onTextChange = (e: any) => {
    setText(e.target.value);
  };

  return (
    <div
      className="df-popup-layer"
      style={{ display: display ? "flex" : "none" }}
    >
      <div className="df-popup-bg" onClick={close}></div>
      <div className="df-popup-content">
        <div className="df-block-title">
          <div className="df-block-title-tab">Import</div>
        </div>
        <div className="df-block-content">
          <div className="df-block-content-wrapper">
            <textarea
              value={text}
              className="df-popup-content-textarea"
              onChange={onTextChange}
              cols={30}
              rows={10}
            ></textarea>
            <div className="df-block-bottom-bar">
              <div
                className="df-button"
                onClick={() => {
                  importProject(text);
                  close();
                }}
              >
                IMPORT
              </div>
              <div className="df-button" onClick={close}>
                CANCEL
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportWindow;
