import { updateNode } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const AppendJapanCitiesCoords: LvtNodeDef = {
  _id: "AppendJapanCitiesCoords",
  ui: {
    title: "AppendJapanCitiesCoords",
    description:
      "append japan cities' coords base on city name using sample data japan-cities.csv; input data MUST include the header line; Japan cities dataset MUST NOT be modifyed.",
  },
  portsIn: [
    {
      name: "data",
      dataType: "stringSpread",
    },
    {
      name: "cityNameColumn",
      dataType: "number",
      defaultValue: 0,
      ui: {
        component: "Select",
        componentOptions: {
          selectorSourceType: "csvColumn",
          selectorSource: "data",
        },
        hidden: true,
      },
    },
    {
      name: "japanCitiesDataset",
      dataType: "stringSpread",
    },
  ],
  portsOut: [
    {
      name: "result",
      dataType: "stringSpread",
    },
  ],
  rule: (data: any, cityNameColume: any, japanCitiesDataset: any) => {
    let _temp = [];
    if (data && japanCitiesDataset) {
      // set header line
      _temp.push([...data[0], "lat", "lng"]);

      // empty template
      const emptyT2 = ["", ""];

      // japan city dataset coloum index:
      // 0: city
      // 5: admin_name
      // 6: capital
      // 1: lat
      // 2: lng

      // genreate admin table for japan cities dataset
      // [[admin_name,lat,lng]]
      const adminData = [];
      for (let i = 0, j = japanCitiesDataset.length; i < j; i += 1) {
        if (japanCitiesDataset[i][6] === "admin") {
          adminData.push([
            japanCitiesDataset[i][5],
            japanCitiesDataset[i][1],
            japanCitiesDataset[i][2],
          ]);
        }
      }

      // foreach datarow
      for (let i = 1, m = data.length; i < m; i += 1) {
        let tar = data[i][cityNameColume].trim().toLowerCase().split("-")[0];

        // fix spell error
        if (tar === "gumma") tar = "gunma";

        let findMatch = false;

        // search in adminData
        for (let j = 0, a = adminData.length; j < a; j += 1) {
          const curAdmin = String(adminData[j][0]).trim().toLowerCase();
          if (tar === curAdmin) {
            _temp.push([...data[i], adminData[j][1], adminData[j][2]]);
            findMatch = true;
            break;
          }
        }

        // search in cities if not found
        if (!findMatch) {
          for (let j = 1, n = japanCitiesDataset.length; j < n; j += 1) {
            const cur = String(japanCitiesDataset[j][0]).trim().toLowerCase();
            if (cur === tar) {
              // match cur
              _temp.push([
                ...data[i],
                japanCitiesDataset[j][1],
                japanCitiesDataset[j][2],
              ]);
              findMatch = true;
              break;
            }
          }
        }

        // add empty data
        if (!findMatch) {
          _temp.push([...data[i], ...emptyT2]);
        }
      }
    } else if (data) {
      _temp = data;
    }
    return _temp;
  },
  update: (node: LvtNode) => {
    updateNode(node, "result", [
      "data",
      "cityNameColumn",
      "japanCitiesDataset",
    ]);
    return node;
  },
};

export default AppendJapanCitiesCoords;
