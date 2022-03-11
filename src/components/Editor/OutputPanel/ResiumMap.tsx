// import { useContext } from "react";
// import { Viewer, GeoJsonDataSource, CzmlDataSource } from "resium";

// import { LvtFlowContext } from "../../../pages/Editor/index";

// const ResiumMap = () => {
//   const lvtFlow = useContext(LvtFlowContext);
//   const renderData = lvtFlow.renderData?.v;

//   return (
//     <Viewer full>
//       {renderData && renderData.dataType === "GeoJSON" && (
//         <GeoJsonDataSource data={renderData.data} />
//       )}
//       {renderData && renderData.dataType === "CZML" && (
//         <CzmlDataSource data={renderData.data} />
//       )}
//     </Viewer>
//   );
// };

// export default ResiumMap;
