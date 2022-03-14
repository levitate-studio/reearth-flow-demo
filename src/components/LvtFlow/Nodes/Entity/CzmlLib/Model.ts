import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Model: LvtNodeDef = {
  _id: "Model",
  ui: {
    title: "Model",
    description: "A 3D model.",
  },
  portsIn: [
    {
      name: "show",
      dataType: "Boolean",
      ui:{
        description: "Whether or not the model is shown."
      },
      defaultValue: true,
    },{
      name: "gltf",
      dataType: "Uri",
      ui:{
        description: "The URI of a <a href='https://github.com/KhronosGroup/glTF'>glTF</a> model. For broadest client compatibility, the URI should be accessible via Cross-Origin Resource Sharing (CORS). The URI may also be a <a href='https://developer.mozilla.org/en/data_URIs'>data URI</a>."
      },
    },{
      name: "scale",
      dataType: "Double",
      ui:{
        description: "The scale of the model."
      },
      defaultValue: 1.0,
    },{
      name: "minimumPixelSize",
      dataType: "Double",
      ui:{
        description: "The approximate minimum pixel size of the model regardless of zoom."
      },
    },{
      name: "maximumScale",
      dataType: "Double",
      ui:{
        description: "The maximum scale size of the model. This is used as an upper limit for `minimumPixelSize`."
      },
    },{
      name: "incrementallyLoadTextures",
      dataType: "Boolean",
      ui:{
        description: "Whether or not the model can be rendered before all textures have loaded."
      },
      defaultValue: true,
    },{
      name: "runAnimations",
      dataType: "Boolean",
      ui:{
        description: "Whether or not to run all animations defined in the glTF model."
      },
    },{
      name: "shadows",
      dataType: "ShadowMode",
      ui:{
        description: "Whether or not the model casts or receives shadows."
      },
      defaultValue: "ENABLED",
    },{
      name: "heightReference",
      dataType: "HeightReference",
      ui:{
        description: "The height reference of the model, which indicates if the position is relative to terrain or not."
      },
    },{
      name: "silhouetteColor",
      dataType: "Color",
      ui:{
        description: "The color of the silhouette drawn around the model."
      },
      defaultValue: "red",
    },{
      name: "silhouetteSize",
      dataType: "Double",
      ui:{
        description: "The size, in pixels, of the silhouette drawn around the model."
      },
    },{
      name: "color",
      dataType: "Color",
      ui:{
        description: "The color to blend with the model's rendered color."
      },
      defaultValue: "white",
    },{
      name: "colorBlendMode",
      dataType: "ColorBlendMode",
      ui:{
        description: "The mode to use for blending between `color` and the model's color."
      },
    },{
      name: "colorBlendAmount",
      dataType: "Double",
      ui:{
        description: "The color strength when `colorBlendMode` is `MIX`. A value of 0.0 results in the model's rendered color while a value of 1.0 results in a solid color, with any value in-between resulting in a mix of the two."
      },
      defaultValue: 0.5,
    },{
      name: "distanceDisplayCondition",
      dataType: "DistanceDisplayCondition",
      ui:{
        description: "The display condition specifying at what distance from the camera this model will be displayed."
      },
    },{
      name: "nodeTransformations",
      dataType: "NodeTransformations",
      ui:{
        description: "A mapping of node names to node transformations."
      },
    },{
      name: "articulations",
      dataType: "Articulations",
      ui:{
        description: "A mapping of keys to articulation values, where the keys are the name of the articulation, a single space, and the name of the stage."
      },
    },
  ],
  portsOut: [
    {
      name: "Model",
      dataType: "Model",
    },
  ],
  rule: (_show: any, _gltf: any, _scale: any, _minimumPixelSize: any, _maximumScale: any, _incrementallyLoadTextures: any, _runAnimations: any, _shadows: any, _heightReference: any, _silhouetteColor: any, _silhouetteSize: any, _color: any, _colorBlendMode: any, _colorBlendAmount: any, _distanceDisplayCondition: any, _nodeTransformations: any, _articulations: any) => {
    return packageSpreadValue(
      { _show, _gltf, _scale, _minimumPixelSize, _maximumScale, _incrementallyLoadTextures, _runAnimations, _shadows, _heightReference, _silhouetteColor, _silhouetteSize, _color, _colorBlendMode, _colorBlendAmount, _distanceDisplayCondition, _nodeTransformations, _articulations }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "Model", ["show", "gltf", "scale", "minimumPixelSize", "maximumScale", "incrementallyLoadTextures", "runAnimations", "shadows", "heightReference", "silhouetteColor", "silhouetteSize", "color", "colorBlendMode", "colorBlendAmount", "distanceDisplayCondition", "nodeTransformations", "articulations"]);
    return node;
  },
};

export default Model;