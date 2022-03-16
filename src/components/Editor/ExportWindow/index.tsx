import copy from "copy-to-clipboard";
import { useState, useImperativeHandle } from "react";

const ExportWindow = ({ cref }: any) => {
  const [display, setDisplay] = useState(false);
  const [text, setText] = useState("");

  useImperativeHandle(cref, () => ({
    show: () => {
      setDisplay(true);
    },
    setText: (text: string) => {
      setText(text);
    },
  }));

  const close = () => {
    setDisplay(false);
    setText("");
  };

  return (
    <div
      className="df-popup-layer"
      style={{ display: display ? "flex" : "none" }}
    >
      <div className="df-popup-bg" onClick={close}></div>
      <div className="df-popup-content">
        <div className="df-block-title">
          <div className="df-block-title-tab">Export</div>
        </div>
        <div className="df-block-content">
          <div className="df-block-content-wrapper">
            <textarea
              value={text}
              className="df-popup-content-textarea"
              readOnly
              cols={30}
              rows={10}
            ></textarea>
            <div className="df-block-bottom-bar">
              <div
                className="df-button"
                onClick={() => {
                  copy(text);
                }}
              >
                COPY TO CLIPBOARD
              </div>
              <div className="df-button" onClick={close}>
                CLOSE
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExportWindow;
