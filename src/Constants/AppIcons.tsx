import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import DefaultTheme from "./DefaultTheme";

export const ThreeDotsIcon = ({
  color = DefaultTheme.colors.surface,
  size = 20,
}: {
  color?: string;
  size?: number;
}) => <Entypo name="dots-three-horizontal" size={size} color={color} />;
export const TemperatureCelcius = ({
  color = DefaultTheme.colors.surface,
  size = 20,
}: {
  color?: string;
  size?: number;
}) => <FontAwesome name="circle-o" size={size} color={color} />;
export const OptionsIcon = ({
  color = DefaultTheme.colors.surface,
  size = 20,
}: {
  color?: string;
  size?: number;
}) => <Ionicons name="ios-options-outline" size={size} color={color} />;
