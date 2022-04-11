import HexGrid from "./HexGrid"
import HexGridOptions from "./HexGridOptions"
import PointGrid from "./PointGrid"
import PointGridOptions from "./PointGridOptions"
import SquareGrid from "./SquareGrid"
import SquareGridOptions from "./SquareGridOptions"
import TriangleGrid from "./TriangleGrid"
import TriangleGridOptions from "./TriangleGridOptions"

export default {
  _id: "Grids",
  children: [
    HexGrid,
    HexGridOptions,
    PointGrid,
    PointGridOptions,
    SquareGrid,
    SquareGridOptions,
    TriangleGrid,
    TriangleGridOptions
  ],
};
  