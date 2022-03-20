import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Label: LvtNodeDef = {
  _id: "Label",
  ui: {
    title: "Label",
    description: "A string of text.",
  },
  portsIn: [
    {
      name: "show",
      dataType: "Boolean",
      ui:{
        description: "Whether or not the label is shown."
      },
    },{
      name: "text",
      dataType: "String",
      ui:{
        description: "The text displayed by the label. The newline character (\n) indicates line breaks."
      },
    },{
      name: "font",
      dataType: "Font",
      ui:{
        description: "The font to use for the label."
      },
    },{
      name: "style",
      dataType: "LabelStyle",
      ui:{
        description: "The style of the label."
      },
    },{
      name: "scale",
      dataType: "Double",
      ui:{
        description: "The scale of the label. The scale is multiplied with the pixel size of the label's text. For example, if the scale is 2.0, the label will be rendered with twice the number of pixels, in each direction, of the text."
      },
    },{
      name: "showBackground",
      dataType: "Boolean",
      ui:{
        description: "Whether or not a background behind the label is shown."
      },
    },{
      name: "backgroundColor",
      dataType: "Color",
      ui:{
        description: "The color of the background behind the label."
      },
    },{
      name: "backgroundPadding",
      dataType: "BackgroundPadding",
      ui:{
        description: "The amount of padding between the text and the label's background."
      },
    },{
      name: "pixelOffset",
      dataType: "PixelOffset",
      ui:{
        description: "The offset, in viewport pixels, of the label origin from the `position`. A pixel offset is the number of pixels up and to the right to place the label, relative to the `position`."
      },
    },{
      name: "eyeOffset",
      dataType: "EyeOffset",
      ui:{
        description: "The eye offset of the label, which is the offset in eye coordinates at which to place the label relative to the `position` property. Eye coordinates are a left-handed coordinate system where the X-axis points toward the viewer's right, the Y-axis points up, and the Z-axis points into the screen."
      },
    },{
      name: "horizontalOrigin",
      dataType: "HorizontalOrigin",
      ui:{
        description: "The horizontal origin of the label. It controls whether the label is left-, center-, or right-aligned with the `position`."
      },
    },{
      name: "verticalOrigin",
      dataType: "VerticalOrigin",
      ui:{
        description: "The vertical origin of the label. It controls whether the label image is bottom-, center-, or top-aligned with the `position`."
      },
    },{
      name: "heightReference",
      dataType: "HeightReference",
      ui:{
        description: "The height reference of the label, which indicates if the position is relative to terrain or not."
      },
    },{
      name: "fillColor",
      dataType: "Color",
      ui:{
        description: "The fill color of the label."
      },
    },{
      name: "outlineColor",
      dataType: "Color",
      ui:{
        description: "The outline color of the label."
      },
    },{
      name: "outlineWidth",
      dataType: "Double",
      ui:{
        description: "The outline width of the label."
      },
    },{
      name: "translucencyByDistance",
      dataType: "NearFarScalar",
      ui:{
        description: "How the label's translucency should change based on the label's distance from the camera. This scalar value should range from 0 to 1."
      },
    },{
      name: "pixelOffsetScaleByDistance",
      dataType: "NearFarScalar",
      ui:{
        description: "How the label's pixel offset should change based on the label's distance from the camera. This scalar value will be multiplied by `pixelOffset`."
      },
    },{
      name: "scaleByDistance",
      dataType: "NearFarScalar",
      ui:{
        description: "How the label's scale should change based on the label's distance from the camera. This scalar value will be multiplied by `scale`."
      },
    },{
      name: "distanceDisplayCondition",
      dataType: "DistanceDisplayCondition",
      ui:{
        description: "The display condition specifying the distance from the camera at which this label will be displayed."
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
      name: "Label",
      dataType: "Label",
    },
  ],
  rule: (_show: any, _text: any, _font: any, _style: any, _scale: any, _showBackground: any, _backgroundColor: any, _backgroundPadding: any, _pixelOffset: any, _eyeOffset: any, _horizontalOrigin: any, _verticalOrigin: any, _heightReference: any, _fillColor: any, _outlineColor: any, _outlineWidth: any, _translucencyByDistance: any, _pixelOffsetScaleByDistance: any, _scaleByDistance: any, _distanceDisplayCondition: any, _disableDepthTestDistance: any) => {
    return packageSpreadValue(
      { _show, _text, _font, _style, _scale, _showBackground, _backgroundColor, _backgroundPadding, _pixelOffset, _eyeOffset, _horizontalOrigin, _verticalOrigin, _heightReference, _fillColor, _outlineColor, _outlineWidth, _translucencyByDistance, _pixelOffsetScaleByDistance, _scaleByDistance, _distanceDisplayCondition, _disableDepthTestDistance }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "Label", ["show", "text", "font", "style", "scale", "showBackground", "backgroundColor", "backgroundPadding", "pixelOffset", "eyeOffset", "horizontalOrigin", "verticalOrigin", "heightReference", "fillColor", "outlineColor", "outlineWidth", "translucencyByDistance", "pixelOffsetScaleByDistance", "scaleByDistance", "distanceDisplayCondition", "disableDepthTestDistance"]);
    return node;
  },
};

export default Label;