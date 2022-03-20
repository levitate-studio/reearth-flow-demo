import Articulation from "./Articulation"
import AlignedAxis from "./AlignedAxis"
import Boolean from "./Boolean"
import ArcTypeValue from "./ArcTypeValue"
import ArcType from "./ArcType"
import Billboard from "./Billboard"
import BackgroundPadding from "./BackgroundPadding"
import BoundingRectangle from "./BoundingRectangle"
import Box from "./Box"
import BoxDimensions from "./BoxDimensions"
import CheckerboardMaterial from "./CheckerboardMaterial"
import ClassificationType from "./ClassificationType"
import ClassificationTypeValue from "./ClassificationTypeValue"
import Clock from "./Clock"
import ClockRange from "./ClockRange"
import ClockStep from "./ClockStep"
import Color from "./Color"
import ConicSensor from "./ConicSensor"
import ColorBlendMode from "./ColorBlendMode"
import ColorBlendModeValue from "./ColorBlendModeValue"
import CornerTypeValue from "./CornerTypeValue"
import Corridor from "./Corridor"
import CornerType from "./CornerType"
import CustomPatternSensor from "./CustomPatternSensor"
import CustomProperty from "./CustomProperty"
import Cylinder from "./Cylinder"
import Direction from "./Direction"
import DistanceDisplayCondition from "./DistanceDisplayCondition"
import Double from "./Double"
import DirectionList from "./DirectionList"
import DoubleList from "./DoubleList"
import Ellipse from "./Ellipse"
import Ellipsoid from "./Ellipsoid"
import Font from "./Font"
import EllipsoidRadii from "./EllipsoidRadii"
import EyeOffset from "./EyeOffset"
import Fan from "./Fan"
import HeightReference from "./HeightReference"
import HeightReferenceValue from "./HeightReferenceValue"
import GridMaterial from "./GridMaterial"
import HorizontalOrigin from "./HorizontalOrigin"
import HorizontalOriginValue from "./HorizontalOriginValue"
import Integer from "./Integer"
import ImageMaterial from "./ImageMaterial"
import Label from "./Label"
import LabelStyleValue from "./LabelStyleValue"
import LabelStyle from "./LabelStyle"
import LineCount from "./LineCount"
import LineThickness from "./LineThickness"
import LineOffset from "./LineOffset"
import Material from "./Material"
import Model from "./Model"
import NearFarScalar from "./NearFarScalar"
import NodeTransformation from "./NodeTransformation"
import Orientation from "./Orientation"
import Path from "./Path"
import InterpolatableProperty from "./InterpolatableProperty"
import PixelOffset from "./PixelOffset"
import Polygon from "./Polygon"
import Polyline from "./Polyline"
import PolylineDashMaterial from "./PolylineDashMaterial"
import PolylineArrowMaterial from "./PolylineArrowMaterial"
import PolylineGlowMaterial from "./PolylineGlowMaterial"
import PolylineMaterial from "./PolylineMaterial"
import Point from "./Point"
import Packet from "./Packet"
import PolylineVolume from "./PolylineVolume"
import Position from "./Position"
import Rectangle from "./Rectangle"
import PolylineOutlineMaterial from "./PolylineOutlineMaterial"
import PositionListOfLists from "./PositionListOfLists"
import PositionList from "./PositionList"
import RectangleCoordinates from "./RectangleCoordinates"
import RectangularSensor from "./RectangularSensor"
import Repeat from "./Repeat"
import SensorVolumePortionToDisplayValue from "./SensorVolumePortionToDisplayValue"
import ShadowMode from "./ShadowMode"
import Rotation from "./Rotation"
import Scale from "./Scale"
import SensorVolumePortionToDisplay from "./SensorVolumePortionToDisplay"
import ShadowModeValue from "./ShadowModeValue"
import Shape from "./Shape"
import SolidColorMaterial from "./SolidColorMaterial"
import String from "./String"
import StripeOrientation from "./StripeOrientation"
import StripeOrientationValue from "./StripeOrientationValue"
import StripeMaterial from "./StripeMaterial"
import Translation from "./Translation"
import Tileset from "./Tileset"
import Vector from "./Vector"
import Uri from "./Uri"
import VerticalOrigin from "./VerticalOrigin"
import ViewFrom from "./ViewFrom"
import VerticalOriginValue from "./VerticalOriginValue"
import AgiCustomPatternSensorPacket from "./AgiCustomPatternSensorPacket"
import Wall from "./Wall"
import AgiFanPacket from "./AgiFanPacket"
import AgiVectorPacket from "./AgiVectorPacket"
import BillboradPacket from "./BillboradPacket"
import AgiConicSensorPacket from "./AgiConicSensorPacket"
import AgiRectangularSensorPacket from "./AgiRectangularSensorPacket"
import BoxPacket from "./BoxPacket"
import CylinderPacket from "./CylinderPacket"
import CorridorPacket from "./CorridorPacket"
import EllipsePacket from "./EllipsePacket"
import PathPacket from "./PathPacket"
import LabelPacket from "./LabelPacket"
import EllipsoidPacket from "./EllipsoidPacket"
import ModelPacket from "./ModelPacket"
import PolylinePacket from "./PolylinePacket"
import PointPacket from "./PointPacket"
import WallPacket from "./WallPacket"
import PolylineVolumePacket from "./PolylineVolumePacket"
import RectanglePacket from "./RectanglePacket"
import PolygonPacket from "./PolygonPacket"
import TilesetPacket from "./TilesetPacket"

export default {
  _id: "CzmlLib",
  children: [
    Articulation,
    AlignedAxis,
    Boolean,
    ArcTypeValue,
    ArcType,
    Billboard,
    BackgroundPadding,
    BoundingRectangle,
    Box,
    BoxDimensions,
    CheckerboardMaterial,
    ClassificationType,
    ClassificationTypeValue,
    Clock,
    ClockRange,
    ClockStep,
    Color,
    ConicSensor,
    ColorBlendMode,
    ColorBlendModeValue,
    CornerTypeValue,
    Corridor,
    CornerType,
    CustomPatternSensor,
    CustomProperty,
    Cylinder,
    Direction,
    DistanceDisplayCondition,
    Double,
    DirectionList,
    DoubleList,
    Ellipse,
    Ellipsoid,
    Font,
    EllipsoidRadii,
    EyeOffset,
    Fan,
    HeightReference,
    HeightReferenceValue,
    GridMaterial,
    HorizontalOrigin,
    HorizontalOriginValue,
    Integer,
    ImageMaterial,
    Label,
    LabelStyleValue,
    LabelStyle,
    LineCount,
    LineThickness,
    LineOffset,
    Material,
    Model,
    NearFarScalar,
    NodeTransformation,
    Orientation,
    Path,
    InterpolatableProperty,
    PixelOffset,
    Polygon,
    Polyline,
    PolylineDashMaterial,
    PolylineArrowMaterial,
    PolylineGlowMaterial,
    PolylineMaterial,
    Point,
    Packet,
    PolylineVolume,
    Position,
    Rectangle,
    PolylineOutlineMaterial,
    PositionListOfLists,
    PositionList,
    RectangleCoordinates,
    RectangularSensor,
    Repeat,
    SensorVolumePortionToDisplayValue,
    ShadowMode,
    Rotation,
    Scale,
    SensorVolumePortionToDisplay,
    ShadowModeValue,
    Shape,
    SolidColorMaterial,
    String,
    StripeOrientation,
    StripeOrientationValue,
    StripeMaterial,
    Translation,
    Tileset,
    Vector,
    Uri,
    VerticalOrigin,
    ViewFrom,
    VerticalOriginValue,
    AgiCustomPatternSensorPacket,
    Wall,
    AgiFanPacket,
    AgiVectorPacket,
    BillboradPacket,
    AgiConicSensorPacket,
    AgiRectangularSensorPacket,
    BoxPacket,
    CylinderPacket,
    CorridorPacket,
    EllipsePacket,
    PathPacket,
    LabelPacket,
    EllipsoidPacket,
    ModelPacket,
    PolylinePacket,
    PointPacket,
    WallPacket,
    PolylineVolumePacket,
    RectanglePacket,
    PolygonPacket,
    TilesetPacket
  ],
};
  