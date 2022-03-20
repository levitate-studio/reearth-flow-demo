import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const AgiFanPacket: LvtNodeDef = {
  _id: "AgiFanPacket",
  ui: {
    title: "AgiFanPacket",
    description: "Describes the graphical properties of a single Agi Fan in a scene.",
  },
  portsIn: [
    {
      name: "id",
      dataType: "String",
      ui:{
        description: "The ID of the object described by this packet. IDs do not need to be GUIDs, but they do need to uniquely identify a single object within a CZML source and any other CZML sources loaded into the same scope. If this property is not specified, the client will automatically generate a unique one. However, this prevents later packets from referring to this object in order to add more data to it."
      },
    },{
      name: "delete",
      dataType: "Boolean",
      ui:{
        description: "Whether the client should delete all existing data for this object, identified by ID. If true, all other properties in this packet will be ignored."
      },
    },{
      name: "name",
      dataType: "String",
      ui:{
        description: "The name of the object. It does not have to be unique and is intended for user consumption."
      },
    },{
      name: "parent",
      dataType: "String",
      ui:{
        description: "The ID of the parent object, if any."
      },
    },{
      name: "description",
      dataType: "String",
      ui:{
        description: "An HTML description of the object."
      },
    },{
      name: "availability",
      dataType: "TimeIntervalCollection",
      ui:{
        description: "The set of time intervals over which data for an object is available. The property can be a single string specifying a single interval, or an array of strings representing intervals. A later CZML packet can update this availability if it changes or is found to be incorrect. For example, an SGP4 propagator may initially report availability for all time, but then later the propagator throws an exception and the availability can be adjusted to end at that time. If this optional property is not present, the object is assumed to be available for all time. Availability is scoped to a particular CZML stream, so two different streams can list different availability for a single object. Within a single stream, the last availability stated for an object is the one in effect and any availabilities in previous packets are ignored. If an object is not available at a time, the client will not draw that object."
      },
    },{
      name: "properties",
      dataType: "CustomProperties",
      ui:{
        description: "A set of custom properties for this object."
      },
    },{
      name: "position",
      dataType: "Position",
      ui:{
        description: "The position of the object in the world. The position has no direct visual representation, but it is used to locate billboards, labels, and other graphical items attached to the object."
      },
    },{
      name: "orientation",
      dataType: "Orientation",
      ui:{
        description: "The orientation of the object in the world. The orientation has no direct visual representation, but it is used to orient models, cones, pyramids, and other graphical items attached to the object."
      },
    },{
      name: "viewFrom",
      dataType: "ViewFrom",
      ui:{
        description: "A suggested camera location when viewing this object. The property is specified as a Cartesian position in the East (x), North (y), Up (z) reference frame relative to the object's position."
      },
    },{
      name: "agi_fan",
      dataType: "Fan",
      ui:{
        description: "Defines a fan, which starts at a point or apex and extends in a specified list of directions from the apex. Each pair of directions forms a face of the fan extending to the specified radius. The fan is positioned and oriented using the `position` and `orientation` properties."
      },
    },
  ],
  portsOut: [
    {
      name: "AgiFanPacket",
      dataType: "AgiFanPacket",
    },
  ],
  rule: (_id: any, _delete: any, _name: any, _parent: any, _description: any, _availability: any, _properties: any, _position: any, _orientation: any, _viewFrom: any, _agi_fan: any) => {
    return packageSpreadValue(
      { _id, _delete, _name, _parent, _description, _availability, _properties, _position, _orientation, _viewFrom, _agi_fan }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "AgiFanPacket", ["id", "delete", "name", "parent", "description", "availability", "properties", "position", "orientation", "viewFrom", "agi_fan"]);
    return node;
  },
};

export default AgiFanPacket;