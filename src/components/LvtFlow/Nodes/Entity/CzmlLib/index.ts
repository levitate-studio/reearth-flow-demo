import Articulation from "./Articulation"
import ArcType from "./ArcType"
import ArcTypeValue from "./ArcTypeValue"
import AlignedAxis from "./AlignedAxis"
import BackgroundPadding from "./BackgroundPadding"
import Boolean from "./Boolean"
import BoundingRectangle from "./BoundingRectangle"
import Billboard from "./Billboard"
import Box from "./Box"
import BoxDimensions from "./BoxDimensions"
import CheckerboardMaterial from "./CheckerboardMaterial"
import ClassificationType from "./ClassificationType"
import ClassificationTypeValue from "./ClassificationTypeValue"
import ClockRange from "./ClockRange"
import ClockStep from "./ClockStep"
import Color from "./Color"
import ColorBlendModeValue from "./ColorBlendModeValue"
import ColorBlendMode from "./ColorBlendMode"
import CornerType from "./CornerType"
import CornerTypeValue from "./CornerTypeValue"
import ConicSensor from "./ConicSensor"
import CustomPatternSensor from "./CustomPatternSensor"
import Clock from "./Clock"
import Corridor from "./Corridor"
import Cylinder from "./Cylinder"
import CustomProperty from "./CustomProperty"
import Direction from "./Direction"
import DirectionList from "./DirectionList"
import DistanceDisplayCondition from "./DistanceDisplayCondition"
import Ellipse from "./Ellipse"
import DoubleList from "./DoubleList"
import Ellipsoid from "./Ellipsoid"
import Fan from "./Fan"
import EyeOffset from "./EyeOffset"
import EllipsoidRadii from "./EllipsoidRadii"
import GridMaterial from "./GridMaterial"
import HeightReference from "./HeightReference"
import Font from "./Font"
import HorizontalOrigin from "./HorizontalOrigin"
import HorizontalOriginValue from "./HorizontalOriginValue"
import HeightReferenceValue from "./HeightReferenceValue"
import Integer from "./Integer"
import Label from "./Label"
import ImageMaterial from "./ImageMaterial"
import LabelStyle from "./LabelStyle"
import LineCount from "./LineCount"
import LabelStyleValue from "./LabelStyleValue"
import LineOffset from "./LineOffset"
import InterpolatableProperty from "./InterpolatableProperty"
import Material from "./Material"
import Model from "./Model"
import LineThickness from "./LineThickness"
import NearFarScalar from "./NearFarScalar"
import Packet from "./Packet"
import NodeTransformation from "./NodeTransformation"
import Orientation from "./Orientation"
import Path from "./Path"
import PixelOffset from "./PixelOffset"
import Double from "./Double"
import Point from "./Point"
import Polyline from "./Polyline"
import Polygon from "./Polygon"
import PolylineDashMaterial from "./PolylineDashMaterial"
import PolylineArrowMaterial from "./PolylineArrowMaterial"
import PolylineOutlineMaterial from "./PolylineOutlineMaterial"
import PolylineGlowMaterial from "./PolylineGlowMaterial"
import PolylineMaterial from "./PolylineMaterial"
import PolylineVolume from "./PolylineVolume"
import Position from "./Position"
import PositionList from "./PositionList"
import PositionListOfLists from "./PositionListOfLists"
import Rectangle from "./Rectangle"
import RectangularSensor from "./RectangularSensor"
import RectangleCoordinates from "./RectangleCoordinates"
import Repeat from "./Repeat"
import SensorVolumePortionToDisplayValue from "./SensorVolumePortionToDisplayValue"
import Rotation from "./Rotation"
import Scale from "./Scale"
import SensorVolumePortionToDisplay from "./SensorVolumePortionToDisplay"
import ShadowMode from "./ShadowMode"
import ShadowModeValue from "./ShadowModeValue"
import Shape from "./Shape"
import SolidColorMaterial from "./SolidColorMaterial"
import StripeMaterial from "./StripeMaterial"
import StripeOrientationValue from "./StripeOrientationValue"
import String from "./String"
import StripeOrientation from "./StripeOrientation"
import Tileset from "./Tileset"
import Translation from "./Translation"
import Uri from "./Uri"
import VerticalOrigin from "./VerticalOrigin"
import Vector from "./Vector"
import VerticalOriginValue from "./VerticalOriginValue"
import ViewFrom from "./ViewFrom"
import Wall from "./Wall"
import AgiRectangularSensorPacket from "./AgiRectangularSensorPacket"
import AgiConicSensorPacket from "./AgiConicSensorPacket"
import AgiVectorPacket from "./AgiVectorPacket"
import BillboradPacket from "./BillboradPacket"
import AgiFanPacket from "./AgiFanPacket"
import AgiCustomPatternSensorPacket from "./AgiCustomPatternSensorPacket"
import BoxPacket from "./BoxPacket"
import EllipsoidPacket from "./EllipsoidPacket"
import EllipsePacket from "./EllipsePacket"
import CorridorPacket from "./CorridorPacket"
import ModelPacket from "./ModelPacket"
import CylinderPacket from "./CylinderPacket"
import LabelPacket from "./LabelPacket"
import PolylinePacket from "./PolylinePacket"
import PointPacket from "./PointPacket"
import PathPacket from "./PathPacket"
import PolylineVolumePacket from "./PolylineVolumePacket"
import WallPacket from "./WallPacket"
import PolygonPacket from "./PolygonPacket"
import TilesetPacket from "./TilesetPacket"
import RectanglePacket from "./RectanglePacket"

export default {
  _id: "CzmlLib",
  children: [
    Articulation,
    ArcType,
    ArcTypeValue,
    AlignedAxis,
    BackgroundPadding,
    Boolean,
    BoundingRectangle,
    Billboard,
    Box,
    BoxDimensions,
    CheckerboardMaterial,
    ClassificationType,
    ClassificationTypeValue,
    ClockRange,
    ClockStep,
    Color,
    ColorBlendModeValue,
    ColorBlendMode,
    CornerType,
    CornerTypeValue,
    ConicSensor,
    CustomPatternSensor,
    Clock,
    Corridor,
    Cylinder,
    CustomProperty,
    Direction,
    DirectionList,
    DistanceDisplayCondition,
    Ellipse,
    DoubleList,
    Ellipsoid,
    Fan,
    EyeOffset,
    EllipsoidRadii,
    GridMaterial,
    HeightReference,
    Font,
    HorizontalOrigin,
    HorizontalOriginValue,
    HeightReferenceValue,
    Integer,
    Label,
    ImageMaterial,
    LabelStyle,
    LineCount,
    LabelStyleValue,
    LineOffset,
    InterpolatableProperty,
    Material,
    Model,
    LineThickness,
    NearFarScalar,
    Packet,
    NodeTransformation,
    Orientation,
    Path,
    PixelOffset,
    Double,
    Point,
    Polyline,
    Polygon,
    PolylineDashMaterial,
    PolylineArrowMaterial,
    PolylineOutlineMaterial,
    PolylineGlowMaterial,
    PolylineMaterial,
    PolylineVolume,
    Position,
    PositionList,
    PositionListOfLists,
    Rectangle,
    RectangularSensor,
    RectangleCoordinates,
    Repeat,
    SensorVolumePortionToDisplayValue,
    Rotation,
    Scale,
    SensorVolumePortionToDisplay,
    ShadowMode,
    ShadowModeValue,
    Shape,
    SolidColorMaterial,
    StripeMaterial,
    StripeOrientationValue,
    String,
    StripeOrientation,
    Tileset,
    Translation,
    Uri,
    VerticalOrigin,
    Vector,
    VerticalOriginValue,
    ViewFrom,
    Wall,
    AgiRectangularSensorPacket,
    AgiConicSensorPacket,
    AgiVectorPacket,
    BillboradPacket,
    AgiFanPacket,
    AgiCustomPatternSensorPacket,
    BoxPacket,
    EllipsoidPacket,
    EllipsePacket,
    CorridorPacket,
    ModelPacket,
    CylinderPacket,
    LabelPacket,
    PolylinePacket,
    PointPacket,
    PathPacket,
    PolylineVolumePacket,
    WallPacket,
    PolygonPacket,
    TilesetPacket,
    RectanglePacket
  ],
};
  