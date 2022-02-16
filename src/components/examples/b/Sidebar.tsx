import HistoryBlock from "./HistoryBlock";
import NodeListBlock from "./NodeListBlock";
import PropertyBlock from "./PropertyBlock";

const Sidebar = (Props: any) => {
  return (
    <aside>
      <NodeListBlock />
      <PropertyBlock />
      <HistoryBlock onHistoryClick={Props.onHistoryClick} />
    </aside>
  );
};

export default Sidebar;
