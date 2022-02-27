import { Viewer, GeoJsonDataSource } from "resium";

export type Props = {
  path?: string;
};

const data = {
  type: "FeatureCollection",
  crs: {
    type: "name",
    properties: {
      name: "urn:ogc:def:crs:OGC:1.3:CRS84",
    },
  },
  features: [
    {
      type: "Feature",
      properties: { id: 1, name: "fujisan" },
      geometry: {
        type: "Point",
        coordinates: [138.7309, 35.3628],
      },
      properties: {
        "marker-color": "#363",
        "marker-size": "large",
        title: "富士山",
        description: "日本一高い山",
      },
    },
    {
      type: "Feature",
      properties: { id: 2, name: "ashitakayama" },
      geometry: {
        type: "Point",
        coordinates: [138.8079, 35.1983],
      },
    },
    {
      type: "Feature",
      properties: { id: 3, name: "komagatake" },
      geometry: {
        type: "Point",
        coordinates: [139.0248, 35.2248],
      },
    },
  ],
};

const Scene = () => {
  return (
    <div>
      <p>Resium Playground</p>
      <Viewer>
        <GeoJsonDataSource data={data} />
      </Viewer>
    </div>
  );
};

export default Scene;
