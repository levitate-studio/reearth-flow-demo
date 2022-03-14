import { updateNode, packageSpreadValue } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Packet: LvtNodeDef = {
  _id: "Packet",
  ui: {
    title: "Packet",
    description:
      "Describes the graphical properties of a single object in a scene, such as a single aircraft.",
  },
  portsIn: [
    {
      name: "id",
      dataType: "string",
      ui: {
        description:
          "The ID of the object described by this packet. IDs do not need to be GUIDs, but they do need to uniquely identify a single object within a CZML source and any other CZML sources loaded into the same scope. If this property is not specified, the client will automatically generate a unique one. However, this prevents later packets from referring to this object in order to add more data to it.",
      },
    },
    {
      name: "delete",
      dataType: "boolean",
      ui: {
        description:
          "Whether the client should delete all existing data for this object, identified by ID. If true, all other properties in this packet will be ignored.",
      },
    },
    {
      name: "name",
      dataType: "string",
      ui: {
        description:
          "The name of the object. It does not have to be unique and is intended for user consumption.",
      },
    },
    {
      name: "parent",
      dataType: "string",
      ui: {
        description: "The ID of the parent object, if any.",
      },
    },
    {
      name: "description",
      dataType: "String",
      ui: {
        description: "An HTML description of the object.",
      },
    },
    {
      name: "clock",
      dataType: "Clock",
      ui: {
        description:
          "The clock settings for the entire data set. Only valid on the document object.",
      },
    },
    {
      name: "version",
      dataType: "string",
      ui: {
        description:
          "The CZML version being written. Only valid on the document object.",
      },
    },
    {
      name: "availability",
      dataType: "TimeIntervalCollection",
      ui: {
        description:
          "The set of time intervals over which data for an object is available. The property can be a single string specifying a single interval, or an array of strings representing intervals. A later CZML packet can update this availability if it changes or is found to be incorrect. For example, an SGP4 propagator may initially report availability for all time, but then later the propagator throws an exception and the availability can be adjusted to end at that time. If this optional property is not present, the object is assumed to be available for all time. Availability is scoped to a particular CZML stream, so two different streams can list different availability for a single object. Within a single stream, the last availability stated for an object is the one in effect and any availabilities in previous packets are ignored. If an object is not available at a time, the client will not draw that object.",
      },
    },
    {
      name: "properties",
      dataType: "CustomProperties",
      ui: {
        description: "A set of custom properties for this object.",
      },
    },
    {
      name: "position",
      dataType: "Position",
      ui: {
        description:
          "The position of the object in the world. The position has no direct visual representation, but it is used to locate billboards, labels, and other graphical items attached to the object.",
      },
    },
    {
      name: "orientation",
      dataType: "Orientation",
      ui: {
        description:
          "The orientation of the object in the world. The orientation has no direct visual representation, but it is used to orient models, cones, pyramids, and other graphical items attached to the object.",
      },
    },
    {
      name: "viewFrom",
      dataType: "ViewFrom",
      ui: {
        description:
          "A suggested camera location when viewing this object. The property is specified as a Cartesian position in the East (x), North (y), Up (z) reference frame relative to the object's position.",
      },
    },
    {
      name: "billboard",
      dataType: "Billboard",
      ui: {
        description:
          "A billboard, or viewport-aligned image, sometimes called a marker. The billboard is positioned in the scene by the `position` property.",
      },
    },
    {
      name: "box",
      dataType: "Box",
      ui: {
        description:
          "A box, which is a closed rectangular cuboid. The box is positioned and oriented using the `position` and `orientation` properties.",
      },
    },
    {
      name: "corridor",
      dataType: "Corridor",
      ui: {
        description:
          "A corridor, which is a shape defined by a centerline and width.",
      },
    },
    {
      name: "cylinder",
      dataType: "Cylinder",
      ui: {
        description:
          "A cylinder, truncated cone, or cone defined by a length, top radius, and bottom radius. The cylinder is positioned and oriented using the `position` and `orientation` properties.",
      },
    },
    {
      name: "ellipse",
      dataType: "Ellipse",
      ui: {
        description:
          "An ellipse, which is a closed curve on the surface of the Earth. The ellipse is positioned using the `position` property.",
      },
    },
    {
      name: "ellipsoid",
      dataType: "Ellipsoid",
      ui: {
        description:
          "An ellipsoid, which is a closed quadric surface that is a three-dimensional analogue of an ellipse. The ellipsoid is positioned and oriented using the `position` and `orientation` properties.",
      },
    },
    {
      name: "label",
      dataType: "Label",
      ui: {
        description:
          "A string of text. The label is positioned in the scene by the `position` property.",
      },
    },
    {
      name: "model",
      dataType: "Model",
      ui: {
        description:
          "A 3D model. The model is positioned and oriented using the `position` and `orientation` properties.",
      },
    },
    {
      name: "path",
      dataType: "Path",
      ui: {
        description:
          "A path, which is a polyline defined by the motion of an object over time. The possible vertices of the path are specified by the `position` property.",
      },
    },
    {
      name: "point",
      dataType: "Point",
      ui: {
        description:
          "A point, or viewport-aligned circle. The point is positioned in the scene by the `position` property.",
      },
    },
    {
      name: "polygon",
      dataType: "Polygon",
      ui: {
        description:
          "A polygon, which is a closed figure on the surface of the Earth.",
      },
    },
    {
      name: "polyline",
      dataType: "Polyline",
      ui: {
        description:
          "A polyline, which is a line in the scene composed of multiple segments.",
      },
    },
    {
      name: "polylineVolume",
      dataType: "PolylineVolume",
      ui: {
        description:
          "A polyline with a volume, defined as a 2D shape extruded along a polyline.",
      },
    },
    {
      name: "rectangle",
      dataType: "Rectangle",
      ui: {
        description:
          "A cartographic rectangle, which conforms to the curvature of the globe and can be placed along the surface or at altitude.",
      },
    },
    {
      name: "tileset",
      dataType: "Tileset",
      ui: {
        description: "A 3D Tiles tileset.",
      },
    },
    {
      name: "wall",
      dataType: "Wall",
      ui: {
        description:
          "A two-dimensional wall which conforms to the curvature of the globe and can be placed along the surface or at altitude.",
      },
    },
    {
      name: "agi_conicSensor",
      dataType: "ConicSensor",
      ui: {
        description:
          "A conical sensor volume taking into account occlusion of an ellipsoid, i.e., the globe. The sensor is positioned and oriented using the `position` and `orientation` properties.",
      },
    },
    {
      name: "agi_customPatternSensor",
      dataType: "CustomPatternSensor",
      ui: {
        description:
          "A custom sensor volume taking into account occlusion of an ellipsoid, i.e., the globe. The sensor is positioned and oriented using the `position` and `orientation` properties.",
      },
    },
    {
      name: "agi_rectangularSensor",
      dataType: "RectangularSensor",
      ui: {
        description:
          "A rectangular pyramid sensor volume taking into account occlusion of an ellipsoid, i.e., the globe. The sensor is positioned and oriented using the `position` and `orientation` properties.",
      },
    },
    {
      name: "agi_fan",
      dataType: "Fan",
      ui: {
        description:
          "Defines a fan, which starts at a point or apex and extends in a specified list of directions from the apex. Each pair of directions forms a face of the fan extending to the specified radius. The fan is positioned and oriented using the `position` and `orientation` properties.",
      },
    },
    {
      name: "agi_vector",
      dataType: "Vector",
      ui: {
        description:
          "Defines a graphical vector that originates at the `position` property and extends in the provided direction for the provided length. The vector is positioned using the `position` property.",
      },
    },
  ],
  portsOut: [
    {
      name: "Packet",
      dataType: "Packet",
    },
  ],
  rule: (
    _id: any,
    _delete: any,
    _name: any,
    _parent: any,
    _description: any,
    _clock: any,
    _version: any,
    _availability: any,
    _properties: any,
    _position: any,
    _orientation: any,
    _viewFrom: any,
    _billboard: any,
    _box: any,
    _corridor: any,
    _cylinder: any,
    _ellipse: any,
    _ellipsoid: any,
    _label: any,
    _model: any,
    _path: any,
    _point: any,
    _polygon: any,
    _polyline: any,
    _polylineVolume: any,
    _rectangle: any,
    _tileset: any,
    _wall: any,
    _agi_conicSensor: any,
    _agi_customPatternSensor: any,
    _agi_rectangularSensor: any,
    _agi_fan: any,
    _agi_vector: any
  ) => {
    return packageSpreadValue({
      _id,
      _delete,
      _name,
      _parent,
      _description,
      _clock,
      _version,
      _availability,
      _properties,
      _position,
      _orientation,
      _viewFrom,
      _billboard,
      _box,
      _corridor,
      _cylinder,
      _ellipse,
      _ellipsoid,
      _label,
      _model,
      _path,
      _point,
      _polygon,
      _polyline,
      _polylineVolume,
      _rectangle,
      _tileset,
      _wall,
      _agi_conicSensor,
      _agi_customPatternSensor,
      _agi_rectangularSensor,
      _agi_fan,
      _agi_vector,
    });
  },
  update: (node: LvtNode) => {
    updateNode(node, "Packet", [
      "id",
      "delete",
      "name",
      "parent",
      "description",
      "clock",
      "version",
      "availability",
      "properties",
      "position",
      "orientation",
      "viewFrom",
      "billboard",
      "box",
      "corridor",
      "cylinder",
      "ellipse",
      "ellipsoid",
      "label",
      "model",
      "path",
      "point",
      "polygon",
      "polyline",
      "polylineVolume",
      "rectangle",
      "tileset",
      "wall",
      "agi_conicSensor",
      "agi_customPatternSensor",
      "agi_rectangularSensor",
      "agi_fan",
      "agi_vector",
    ]);
    return node;
  },
};

export default Packet;
