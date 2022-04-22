import React from "react";
import { Text, TextProps } from "react-native";
import DefaultTheme from "../Constants/DefaultTheme";
import { isArray } from "lodash";
export default {
  BoldHeader: (props: TextProps) => (
    <Text
      {...props}
      style={[
        ...(isArray(props.style) ? props.style : [props.style]),
        { fontSize: 20, fontWeight: "500" },
      ]}
    />
  ),
  HeaderText: (props: TextProps) => (
    <Text
      {...props}
      style={[
        ...(isArray(props.style) ? props.style : [props.style]),
        { fontSize: 18, fontWeight: "500" },
      ]}
    />
  ),
  Text: (props: TextProps) => <Text {...props} />,
  SmallText: (props: TextProps) => (
    <Text
      {...props}
      style={[
        ...(isArray(props.style) ? props.style : [props.style]),
        { fontSize: 14, color: DefaultTheme.colors.placeholder },
      ]}
    />
  ),
};
