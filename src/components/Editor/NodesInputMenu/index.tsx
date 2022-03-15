import "./df-nodes-input-menu.css";
import { useState, useImperativeHandle, useRef } from "react";

import * as Nodes from "../../LvtFlow/Nodes";

const NodesInputMenu = (Props: any) => {
  // =======================================
  // Display control
  // =======================================
  const [displayMenu, setDisplayMenu] = useState(false);
  const [pos, setPos] = useState({ clientX: 0, clientY: 0 });
  const [menuPos, setMenuPos] = useState({ clientX: 0, clientY: 0 });

  const menuSize = {
    width: 400,
    height: 500,
  };

  useImperativeHandle(Props.cref, () => ({
    show: ({ pos, reactFlowBounds }: any) => {
      // console.log(reactFlowBounds);
      setPos(pos);
      setMenuPos({
        clientX:
          pos.clientX + menuSize.width + 10 > reactFlowBounds.right
            ? reactFlowBounds.right - menuSize.width - 10
            : pos.clientX,
        clientY:
          pos.clientY + menuSize.height + 10 > reactFlowBounds.bottom
            ? reactFlowBounds.bottom - menuSize.height - 10
            : pos.clientY,
      });
      setDisplayMenu(true);
      updateList("");
      setTimeout(() => {
        (inputEl.current as any).focus();
      }, 0);
    },
    hide: () => {
      hideMenu();
    },
  }));

  const hideMenu = () => {
    setDisplayMenu(false);
  };

  // =======================================
  // Event: Add Node
  // =======================================
  const onNodeItemClick = (nodeId: string) => {
    Props.addNodeFromMenu({ nodeId, pos });
    hideMenu();
  };
  // =======================================
  // Nodes Filter
  // =======================================
  const inputEl = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [filtedNodeIds, setFiltedNodeIds] = useState(
    Object.keys(Nodes.nodeDefs)
  );
  const onInputChange = (e: any) => {
    updateList(e.target.value);
  };
  const updateList = (value: string) => {
    setInputValue(value);
    setFiltedNodeIds(searchNode(value, Object.keys(Nodes.nodeDefs)));
  };
  const searchNode = (v: string, list: string[]) => {
    if (v) {
      const filted: string[] = [];
      const regStr = ["", v.replace(/\s/g, "-"), ""].join(".*");
      const reg = new RegExp(regStr, "i");

      list.forEach((nodeId: string) => {
        if (nodeId.match(reg)) {
          filted.push(nodeId);
        }
      });
      return filted;
    }
    return list;
  };
  const FiltedList = filtedNodeIds.map((nodeId, index) => {
    const sep = nodeId.split("-");
    const nodeSelfId = sep.pop();
    return (
      <div
        className="item"
        key={nodeId}
        tabIndex={index}
        onClick={() => {
          onNodeItemClick(nodeId);
        }}
      >
        <div className="category">{sep.join(" ")}</div>
        <div className="self" title={Nodes.nodeDefs[nodeId]?.ui.description}>
          {nodeSelfId}
        </div>
      </div>
    );
  });
  return (
    <div
      className={`df-nodes-input-menu ${displayMenu ? "" : "hidden"}`}
      style={{
        left: menuPos.clientX,
        top: menuPos.clientY,
        width: menuSize.width + "px",
      }}
    >
      <div className="df-nodes-input-menu-input">
        <input
          type="text"
          ref={inputEl}
          value={inputValue}
          onChange={onInputChange}
        />
      </div>
      <div
        className="df-nodes-input-menu-wrapper"
        style={{ maxHeight: `${menuSize.height - 37}px` }}
      >
        {FiltedList}
      </div>
    </div>
  );
};

export default NodesInputMenu;
