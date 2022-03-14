import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const RectangularSensor: LvtNodeDef = {
  _id: "RectangularSensor",
  ui: {
    title: "RectangularSensor",
    description: "A rectangular pyramid sensor volume taking into account occlusion of an ellipsoid, i.e., the globe.",
  },
  portsIn: [
    {
      name: "show",
      dataType: "Boolean",
      ui:{
        description: "Whether or not the entire rectangular pyramid sensor is shown."
      },
      defaultValue: true,
    },{
      name: "xHalfAngle",
      dataType: "Double",
      ui:{
        description: "The X half angle."
      },
    },{
      name: "yHalfAngle",
      dataType: "Double",
      ui:{
        description: "The Y half angle."
      },
    },{
      name: "radius",
      dataType: "Double",
      ui:{
        description: "The radial limit of the sensor."
      },
    },{
      name: "showIntersection",
      dataType: "Boolean",
      ui:{
        description: "Whether or not the intersection of the sensor with the Earth is shown."
      },
      defaultValue: true,
    },{
      name: "intersectionColor",
      dataType: "Color",
      ui:{
        description: "The color of the intersection of the sensor with the Earth."
      },
    },{
      name: "intersectionWidth",
      dataType: "Double",
      ui:{
        description: "The width of the intersection in pixels."
      },
      defaultValue: 1.0,
    },{
      name: "showLateralSurfaces",
      dataType: "Boolean",
      ui:{
        description: "Whether or not the lateral surfaces, i.e., the outer sides of the sensor, are shown."
      },
    },{
      name: "lateralSurfaceMaterial",
      dataType: "Material",
      ui:{
        description: "The material to use for the sensor's lateral surface, i.e., the outer sides of the sensor."
      },
      defaultValue: "solid white",
    },{
      name: "showEllipsoidSurfaces",
      dataType: "Boolean",
      ui:{
        description: "Whether or not ellipsoid surfaces are shown."
      },
    },{
      name: "ellipsoidSurfaceMaterial",
      dataType: "Material",
      ui:{
        description: "The material to use for the sensor's ellipsoid surfaces."
      },
      defaultValue: "solid white",
    },{
      name: "showEllipsoidHorizonSurfaces",
      dataType: "Boolean",
      ui:{
        description: "Whether or not ellipsoid horizon surfaces are shown."
      },
    },{
      name: "ellipsoidHorizonSurfaceMaterial",
      dataType: "Material",
      ui:{
        description: "The material to use for the sensor's ellipsoid horizon surfaces."
      },
      defaultValue: "solid white",
    },{
      name: "showDomeSurfaces",
      dataType: "Boolean",
      ui:{
        description: "Whether or not dome surfaces are shown."
      },
    },{
      name: "domeSurfaceMaterial",
      dataType: "Material",
      ui:{
        description: "The material to use for the sensor's dome surfaces."
      },
      defaultValue: "solid white",
    },{
      name: "portionToDisplay",
      dataType: "SensorVolumePortionToDisplay",
      ui:{
        description: "What part of the sensor should be displayed."
      },
    },{
      name: "environmentConstraint",
      dataType: "Boolean",
      ui:{
        description: "Whether or not the sensor will be occluded by objects in the current view of the environment, e.g. visible terrain or models."
      },
      defaultValue: false,
    },{
      name: "showEnvironmentOcclusion",
      dataType: "Boolean",
      ui:{
        description: "Whether or not the portion of the terrain occluded by the environment will be drawn with a separate material."
      },
    },{
      name: "environmentOcclusionMaterial",
      dataType: "Material",
      ui:{
        description: "The material to use for the portion of the sensor occluded by the environment."
      },
      defaultValue: "solid white",
    },{
      name: "showEnvironmentIntersection",
      dataType: "Boolean",
      ui:{
        description: "Whether or not a line showing where the sensor intersects the environment will be drawn."
      },
    },{
      name: "environmentIntersectionColor",
      dataType: "Color",
      ui:{
        description: "The color of the intersection line between the sensor and the environment."
      },
      defaultValue: "white",
    },{
      name: "environmentIntersectionWidth",
      dataType: "Double",
      ui:{
        description: "The width in meters of the intersection line between the sensor and the environment."
      },
    },{
      name: "showThroughEllipsoid",
      dataType: "Boolean",
      ui:{
        description: "Whether or not a sensor intersecting the ellipsoid is drawn through the ellipsoid and potentially out to the other side."
      },
      defaultValue: false,
    },{
      name: "showViewshed",
      dataType: "Boolean",
      ui:{
        description: "Whether or not the viewshed of the sensor will be drawn."
      },
    },{
      name: "viewshedVisibleColor",
      dataType: "Color",
      ui:{
        description: "The color of the scene geometry that is visible to the sensor."
      },
      defaultValue: "lime, 50% transparent",
    },{
      name: "viewshedOccludedColor",
      dataType: "Color",
      ui:{
        description: "The color of the scene geometry that is not visible to the sensor."
      },
    },{
      name: "viewshedResolution",
      dataType: "Integer",
      ui:{
        description: "The resolution in pixels of the viewshed."
      },
      defaultValue: 2048,
    },
  ],
  portsOut: [
    {
      name: "RectangularSensor",
      dataType: "RectangularSensor",
    },
  ],
  rule: (_show: any, _xHalfAngle: any, _yHalfAngle: any, _radius: any, _showIntersection: any, _intersectionColor: any, _intersectionWidth: any, _showLateralSurfaces: any, _lateralSurfaceMaterial: any, _showEllipsoidSurfaces: any, _ellipsoidSurfaceMaterial: any, _showEllipsoidHorizonSurfaces: any, _ellipsoidHorizonSurfaceMaterial: any, _showDomeSurfaces: any, _domeSurfaceMaterial: any, _portionToDisplay: any, _environmentConstraint: any, _showEnvironmentOcclusion: any, _environmentOcclusionMaterial: any, _showEnvironmentIntersection: any, _environmentIntersectionColor: any, _environmentIntersectionWidth: any, _showThroughEllipsoid: any, _showViewshed: any, _viewshedVisibleColor: any, _viewshedOccludedColor: any, _viewshedResolution: any) => {
    return packageSpreadValue(
      { _show, _xHalfAngle, _yHalfAngle, _radius, _showIntersection, _intersectionColor, _intersectionWidth, _showLateralSurfaces, _lateralSurfaceMaterial, _showEllipsoidSurfaces, _ellipsoidSurfaceMaterial, _showEllipsoidHorizonSurfaces, _ellipsoidHorizonSurfaceMaterial, _showDomeSurfaces, _domeSurfaceMaterial, _portionToDisplay, _environmentConstraint, _showEnvironmentOcclusion, _environmentOcclusionMaterial, _showEnvironmentIntersection, _environmentIntersectionColor, _environmentIntersectionWidth, _showThroughEllipsoid, _showViewshed, _viewshedVisibleColor, _viewshedOccludedColor, _viewshedResolution }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "RectangularSensor", ["show", "xHalfAngle", "yHalfAngle", "radius", "showIntersection", "intersectionColor", "intersectionWidth", "showLateralSurfaces", "lateralSurfaceMaterial", "showEllipsoidSurfaces", "ellipsoidSurfaceMaterial", "showEllipsoidHorizonSurfaces", "ellipsoidHorizonSurfaceMaterial", "showDomeSurfaces", "domeSurfaceMaterial", "portionToDisplay", "environmentConstraint", "showEnvironmentOcclusion", "environmentOcclusionMaterial", "showEnvironmentIntersection", "environmentIntersectionColor", "environmentIntersectionWidth", "showThroughEllipsoid", "showViewshed", "viewshedVisibleColor", "viewshedOccludedColor", "viewshedResolution"]);
    return node;
  },
};

export default RectangularSensor;