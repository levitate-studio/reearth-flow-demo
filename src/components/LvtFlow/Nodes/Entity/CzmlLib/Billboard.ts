import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Billboard: LvtNodeDef = {
  _id: "Billboard",
  ui: {
    title: "Billboard",
    description: "A billboard, or viewport-aligned image. The billboard is positioned in the scene by the `position` property. A billboard is sometimes called a marker.",
  },
  portsIn: [
    {
      name: "show",
      dataType: "Boolean",
      ui:{
        description: "Whether or not the billboard is shown."
      },
    },{
      name: "image",
      dataType: "Uri",
      ui:{
        description: "The URI of the image displayed on the billboard. For broadest client compatibility, the URI should be accessible via Cross-Origin Resource Sharing (CORS). The URI may also be a <a href='https://developer.mozilla.org/en/data_URIs'>data URI</a>."
      },
    },{
      name: "scale",
      dataType: "Double",
      ui:{
        description: "The scale of the billboard. The scale is multiplied with the pixel size of the billboard's `image`. For example, if the scale is 2.0, the billboard will be rendered with twice the number of pixels, in each direction, of the `image`."
      },
    },{
      name: "pixelOffset",
      dataType: "PixelOffset",
      ui:{
        description: "The offset, in viewport pixels, of the billboard origin from the `position`. A pixel offset is the number of pixels up and to the right to place the billboard, relative to the `position`."
      },
    },{
      name: "eyeOffset",
      dataType: "EyeOffset",
      ui:{
        description: "The eye offset of the billboard, which is the offset in eye coordinates at which to place the billboard relative to the `position` property. Eye coordinates are a left-handed coordinate system where the X-axis points toward the viewer's right, the Y-axis points up, and the Z-axis points into the screen."
      },
    },{
      name: "horizontalOrigin",
      dataType: "HorizontalOrigin",
      ui:{
        description: "The horizontal origin of the billboard, which determines whether the billboard image is left-, center-, or right-aligned with the `position`."
      },
    },{
      name: "verticalOrigin",
      dataType: "VerticalOrigin",
      ui:{
        description: "The vertical origin of the billboard, which determines whether the billboard image is bottom-, center-, or top-aligned with the `position`."
      },
    },{
      name: "heightReference",
      dataType: "HeightReference",
      ui:{
        description: "The height reference of the billboard, which indicates if the position is relative to terrain or not."
      },
    },{
      name: "color",
      dataType: "Color",
      ui:{
        description: "The color of the billboard. This color value is multiplied with the values of the billboard's `image` to produce the final color."
      },
    },{
      name: "rotation",
      dataType: "Double",
      ui:{
        description: "The rotation of the billboard, in radians, counter-clockwise from the alignedAxis."
      },
    },{
      name: "alignedAxis",
      dataType: "AlignedAxis",
      ui:{
        description: "The aligned axis is the unit vector, in world coordinates, that the billboard up vector points towards. The default is the zero vector, which means the billboard is aligned to the screen up vector."
      },
    },{
      name: "sizeInMeters",
      dataType: "Boolean",
      ui:{
        description: "Whether this billboard's size (`width` and `height`) should be measured in meters, otherwise size is measured in pixels."
      },
    },{
      name: "width",
      dataType: "Double",
      ui:{
        description: "The width of the billboard, in pixels (or meters, if `sizeInMeters` is true). By default, the native width of the image is used."
      },
    },{
      name: "height",
      dataType: "Double",
      ui:{
        description: "The height of the billboard, in pixels (or meters, if `sizeInMeters` is true). By default, the native height of the image is used."
      },
    },{
      name: "scaleByDistance",
      dataType: "NearFarScalar",
      ui:{
        description: "How the billboard's scale should change based on the billboard's distance from the camera. This scalar value will be multiplied by `scale`."
      },
    },{
      name: "translucencyByDistance",
      dataType: "NearFarScalar",
      ui:{
        description: "How the billboard's translucency should change based on the billboard's distance from the camera. This scalar value should range from 0 to 1."
      },
    },{
      name: "pixelOffsetScaleByDistance",
      dataType: "NearFarScalar",
      ui:{
        description: "How the billboard's pixel offset should change based on the billboard's distance from the camera. This scalar value will be multiplied by `pixelOffset`."
      },
    },{
      name: "imageSubRegion",
      dataType: "BoundingRectangle",
      ui:{
        description: "A sub-region of the image which will be used for the billboard, rather than the entire image, measured in pixels from the bottom-left."
      },
    },{
      name: "distanceDisplayCondition",
      dataType: "DistanceDisplayCondition",
      ui:{
        description: "The display condition specifying the distance from the camera at which this billboard will be displayed."
      },
    },{
      name: "disableDepthTestDistance",
      dataType: "Double",
      ui:{
        description: "The distance from the camera at which to disable the depth test. This can be used to prevent clipping against terrain, for example. When set to zero, the depth test is always applied. When set to Infinity, the depth test is never applied."
      },
    },
  ],
  portsOut: [
    {
      name: "Billboard",
      dataType: "Billboard",
    },
  ],
  rule: (_show: any, _image: any, _scale: any, _pixelOffset: any, _eyeOffset: any, _horizontalOrigin: any, _verticalOrigin: any, _heightReference: any, _color: any, _rotation: any, _alignedAxis: any, _sizeInMeters: any, _width: any, _height: any, _scaleByDistance: any, _translucencyByDistance: any, _pixelOffsetScaleByDistance: any, _imageSubRegion: any, _distanceDisplayCondition: any, _disableDepthTestDistance: any) => {
    return packageSpreadValue(
      { _show, _image, _scale, _pixelOffset, _eyeOffset, _horizontalOrigin, _verticalOrigin, _heightReference, _color, _rotation, _alignedAxis, _sizeInMeters, _width, _height, _scaleByDistance, _translucencyByDistance, _pixelOffsetScaleByDistance, _imageSubRegion, _distanceDisplayCondition, _disableDepthTestDistance }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "Billboard", ["show", "image", "scale", "pixelOffset", "eyeOffset", "horizontalOrigin", "verticalOrigin", "heightReference", "color", "rotation", "alignedAxis", "sizeInMeters", "width", "height", "scaleByDistance", "translucencyByDistance", "pixelOffsetScaleByDistance", "imageSubRegion", "distanceDisplayCondition", "disableDepthTestDistance"]);
    return node;
  },
};

export default Billboard;