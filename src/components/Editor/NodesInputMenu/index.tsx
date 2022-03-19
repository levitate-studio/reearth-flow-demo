import "./df-nodes-input-menu.css";
import { useState, useImperativeHandle, useRef, useMemo } from "react";

import * as Nodes from "../../LvtFlow/Nodes";

const NodesInputMenu = (Props: any) => {
  // =======================================
  // Display control
  // =======================================
  const [displayMenu, setDisplayMenu] = useState(false);
  const [pos, setPos] = useState({ clientX: 0, clientY: 0 });
  const [menuPos, setMenuPos] = useState({ clientX: 0, clientY: 0 });

  const menuSize = {
    width: 440,
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
      setSelectIndex(-1);
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
  const onInputEnter = () => {
    if (filtedNodeIds.length > 0) {
      const index =
        selectedIndex !== -1 ? selectedIndex % filtedNodeIds.length : 0;
      onNodeItemClick(filtedNodeIds[index]);
    }
  };

  // =======================================
  // Select
  // =======================================
  const [selectedIndex, setSelectIndex] = useState(-1);
  const menuRef = useRef(null);

  const updateSelectedIndex = (step: number) => {
    let newIndex = -1;
    if (filtedNodeIds.length > 0) {
      newIndex =
        (filtedNodeIds.length + selectedIndex + step) % filtedNodeIds.length;
    }
    setSelectIndex(newIndex);

    if (newIndex !== -1) {
      const top = (menuRef.current as any)?.children[newIndex].offsetTop;
      const scrolled = (menuRef.current as any).scrollTop;
      if (top + 100 - scrolled > menuSize.height) {
        (menuRef.current as any).scrollTop = top + 100 - menuSize.height;
      } else if (top - scrolled < 0) {
        (menuRef.current as any).scrollTop = top;
      }
    }
  };

  // =======================================
  // Nodes Filter
  // =======================================
  const inputEl = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [filtedNodeIds, setFiltedNodeIds] = useState(
    Object.keys(Nodes.nodeDefs)
  );
  const [nodeIdTitles, setNodeIdTitles]: any = useState([]);

  useMemo(() => {
    const nodeIdTitles: any[] = [];
    Object.keys(Nodes.nodeDefs).forEach((nodeId) => {
      nodeIdTitles.push({
        nodeId: nodeId,
        text: `${nodeId.replace(/-/g, "")}${Nodes.nodeDefs[nodeId].ui.title}`,
      });
    });
    setNodeIdTitles(nodeIdTitles);
  }, []);

  const onInputChange = (e: any) => {
    updateList(e.target.value);
  };
  const updateList = (value: string) => {
    setInputValue(value);
    setFiltedNodeIds(searchNode(value, nodeIdTitles));
  };
  const searchNode = (v: string, list: any[]) => {
    if (v) {
      const filted: string[] = [];
      const regStr = [
        "",
        v
          .replace(/\s/g, "")
          .replace(/\+/g, "\\+")
          .replace(/\*/g, "\\*")
          .replace(/\//g, "\\/"),
        "",
      ].join(".*");
      const reg = new RegExp(regStr, "i");

      list.forEach((nodeIdTitle: any) => {
        if (nodeIdTitle.text.match(reg)) {
          filted.push(nodeIdTitle.nodeId);
        }
      });

      return filted;
    }
    return Object.keys(Nodes.nodeDefs);
  };

  const FiltedList = filtedNodeIds.map((nodeId, index) => {
    const sep = nodeId.split("-");
    const nodeSelfId = sep.pop();
    return (
      <div
        className={`item ${selectedIndex === index && "active"}`}
        key={nodeId}
        tabIndex={index}
        onClick={() => {
          onNodeItemClick(nodeId);
        }}
        onMouseEnter={() => {
          setSelectIndex(index);
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
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              onInputEnter();
            } else if (e.code === "ArrowUp") {
              e.preventDefault();
              updateSelectedIndex(-1);
            } else if (e.code === "ArrowDown") {
              e.preventDefault();
              updateSelectedIndex(1);
            }
          }}
        />
      </div>
      <div
        className="df-nodes-input-menu-wrapper"
        ref={menuRef}
        style={{ maxHeight: `${menuSize.height - 37}px` }}
      >
        {FiltedList}
      </div>
    </div>
  );
};

export default NodesInputMenu;
