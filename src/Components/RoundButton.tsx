import { View, Text, Pressable, PressableProps, TextProps } from "react-native";
import React from "react";
import DefaultTheme from "../Constants/DefaultTheme";

interface RoundButtonProps extends PressableProps {
  text?: string;
  textStyle?: TextProps["style"];
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
}
const RoundButton = (props: RoundButtonProps) => {
  return (
    <Pressable
      style={[
        {
          borderRadius: DefaultTheme.roundness.round,
          borderColor: DefaultTheme.colors.borderColor,
          borderWidth: DefaultTheme.borderWidth.slim,
          alignSelf: "flex-start",
          padding: DefaultTheme.padding.large,
        },
      ]}
      {...props}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {props.leftIcon ?? null}
        {props.text ? (
          <View style={{ paddingHorizontal: DefaultTheme.padding.medium }}>
            <Text style={props.textStyle ?? {}}>{props.text}</Text>
          </View>
        ) : null}
        {props.rightIcon ?? null}
      </View>
    </Pressable>
  );
};

export default RoundButton;
