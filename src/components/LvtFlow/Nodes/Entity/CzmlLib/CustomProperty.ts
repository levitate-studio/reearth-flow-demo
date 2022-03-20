import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const CustomProperty: LvtNodeDef = {
  _id: "CustomProperty",
  ui: {
    title: "CustomProperty",
    description: "A custom property.",
  },
  portsIn: [
    {
      name: "boolean",
      dataType: "BooleanValue",
      ui:{
        description: "The property specified as a boolean value."
      },
    },{
      name: "boundingRectangle",
      dataType: "BoundingRectangleValue",
      ui:{
        description: "The property specified as `[X, Y, Width, Height]`."
      },
    },{
      name: "cartesian",
      dataType: "Cartesian3Value",
      ui:{
        description: "The property specified as a three-dimensional Cartesian value `[X, Y, Z]`."
      },
    },{
      name: "cartographicRadians",
      dataType: "CartographicRadiansValue",
      ui:{
        description: "The property specified in Cartographic WGS84 coordinates, `[Longitude, Latitude, Height]`, where Longitude and Latitude are in radians and Height is in meters."
      },
    },{
      name: "cartographicDegrees",
      dataType: "CartographicDegreesValue",
      ui:{
        description: "The property specified in Cartographic WGS84 coordinates, `[Longitude, Latitude, Height]`, where Longitude and Latitude are in degrees and Height is in meters."
      },
    },{
      name: "cartesian2",
      dataType: "Cartesian2Value",
      ui:{
        description: "The property specified as a two-dimensional Cartesian value `[X, Y]`."
      },
    },{
      name: "unitCartesian",
      dataType: "UnitCartesian3Value",
      ui:{
        description: "The property specified as a three-dimensional unit magnitude Cartesian value `[X, Y, Z]`."
      },
    },{
      name: "spherical",
      dataType: "SphericalValue",
      ui:{
        description: "The property specified as a spherical value `[Clock, Cone, Magnitude]`. The clock angle is measured in the XY plane from the positive X axis toward the positive Y axis. The cone angle is the angle from the positive Z axis toward the negative Z axis."
      },
    },{
      name: "unitSpherical",
      dataType: "UnitSphericalValue",
      ui:{
        description: "The property specified as a unit spherical value `[Clock, Cone]`. The clock angle is measured in the XY plane from the positive X axis toward the positive Y axis. The cone angle is the angle from the positive Z axis toward the negative Z axis."
      },
    },{
      name: "rgba",
      dataType: "RgbaValue",
      ui:{
        description: "The property specified as an array of color components `[Red, Green, Blue, Alpha]` where each component is an integer in the range 0-255."
      },
    },{
      name: "rgbaf",
      dataType: "RgbafValue",
      ui:{
        description: "The property specified as an array of color components `[Red, Green, Blue, Alpha]` where each component is a double in the range 0.0-1.0."
      },
    },{
      name: "colorBlendMode",
      dataType: "ColorBlendModeValue",
      ui:{
        description: "The property specified as a color blend mode."
      },
    },{
      name: "cornerType",
      dataType: "CornerTypeValue",
      ui:{
        description: "The property specified as a corner style."
      },
    },{
      name: "heightReference",
      dataType: "HeightReferenceValue",
      ui:{
        description: "The property specified as a height reference."
      },
    },{
      name: "horizontalOrigin",
      dataType: "HorizontalOriginValue",
      ui:{
        description: "The property specified as a horizontal origin."
      },
    },{
      name: "labelStyle",
      dataType: "LabelStyleValue",
      ui:{
        description: "The property specified as a label style."
      },
    },{
      name: "number",
      dataType: "DoubleValue",
      ui:{
        description: "The property specified as a number."
      },
    },{
      name: "nearFarScalar",
      dataType: "NearFarScalarValue",
      ui:{
        description: "The property specified as four values `[NearDistance, NearValue, FarDistance, FarValue]`."
      },
    },{
      name: "unitQuaternion",
      dataType: "UnitQuaternionValue",
      ui:{
        description: "The property specified as a 4-dimensional unit magnitude quaternion, specified as `[X, Y, Z, W]`."
      },
    },{
      name: "shadowMode",
      dataType: "ShadowModeValue",
      ui:{
        description: "The property specified as a shadow mode."
      },
    },{
      name: "string",
      dataType: "StringValue",
      ui:{
        description: "The property specified as a string."
      },
    },{
      name: "stripeOrientation",
      dataType: "StripeOrientationValue",
      ui:{
        description: "The property specified as an orientation of stripes in the stripe material."
      },
    },{
      name: "wsen",
      dataType: "CartographicRectangleRadiansValue",
      ui:{
        description: "The property specified as a Cartographic rectangle `[WestLongitude, SouthLatitude, EastLongitude, NorthLatitude]`, with values in radians."
      },
    },{
      name: "wsenDegrees",
      dataType: "CartographicRectangleDegreesValue",
      ui:{
        description: "The property specified as a Cartographic rectangle `[WestLongitude, SouthLatitude, EastLongitude, NorthLatitude]`, with values in degrees."
      },
    },{
      name: "uri",
      dataType: "UriValue",
      ui:{
        description: "The property specified as a URI."
      },
    },{
      name: "verticalOrigin",
      dataType: "VerticalOriginValue",
      ui:{
        description: "The property specified as a vertical origin."
      },
    },
  ],
  portsOut: [
    {
      name: "CustomProperty",
      dataType: "CustomProperty",
    },
  ],
  rule: (_boolean: any, _boundingRectangle: any, _cartesian: any, _cartographicRadians: any, _cartographicDegrees: any, _cartesian2: any, _unitCartesian: any, _spherical: any, _unitSpherical: any, _rgba: any, _rgbaf: any, _colorBlendMode: any, _cornerType: any, _heightReference: any, _horizontalOrigin: any, _labelStyle: any, _number: any, _nearFarScalar: any, _unitQuaternion: any, _shadowMode: any, _string: any, _stripeOrientation: any, _wsen: any, _wsenDegrees: any, _uri: any, _verticalOrigin: any) => {
    return packageSpreadValue(
      { _boolean, _boundingRectangle, _cartesian, _cartographicRadians, _cartographicDegrees, _cartesian2, _unitCartesian, _spherical, _unitSpherical, _rgba, _rgbaf, _colorBlendMode, _cornerType, _heightReference, _horizontalOrigin, _labelStyle, _number, _nearFarScalar, _unitQuaternion, _shadowMode, _string, _stripeOrientation, _wsen, _wsenDegrees, _uri, _verticalOrigin }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "CustomProperty", ["boolean", "boundingRectangle", "cartesian", "cartographicRadians", "cartographicDegrees", "cartesian2", "unitCartesian", "spherical", "unitSpherical", "rgba", "rgbaf", "colorBlendMode", "cornerType", "heightReference", "horizontalOrigin", "labelStyle", "number", "nearFarScalar", "unitQuaternion", "shadowMode", "string", "stripeOrientation", "wsen", "wsenDegrees", "uri", "verticalOrigin"]);
    return node;
  },
};

export default CustomProperty;