import React from "react";
import { View } from "react-native";
import AppText from "../Components/AppText";
import AppDimensions from "../Constants/AppDimensions";
import DefaultTheme from "../Constants/DefaultTheme";

export const time = {
  DAY: "DAY",
  NIGHT: "NIGHT",
};
export const PAGE_PADDING_TOP = 50;
export const PAGE_PADDING_BOTTOM = 40;
export const PAGE_PADDING_HORIZONTAL = 30;
export const BORDER_RADIUS = 30;
export const PAGE_HEIGHT =
  AppDimensions.height - PAGE_PADDING_TOP - PAGE_PADDING_BOTTOM;
export const PAGE_WIDTH = AppDimensions.width - 2 * PAGE_PADDING_HORIZONTAL;
export const HEIGHT_1_3RD = PAGE_HEIGHT / 3;
export const HEIGHT_2_3RD = (PAGE_HEIGHT * 2) / 3;
export const SMALL_COMPONENT_HEIGHT = HEIGHT_1_3RD / 1.1;
export const LARGE_COMPONENT_HEIGHT = HEIGHT_2_3RD;

const SUN_IMAGE_SIZE = SMALL_COMPONENT_HEIGHT / 2.4;
export const SUN_IMAGE = {
  right: SMALL_COMPONENT_HEIGHT / 10,
  top: SMALL_COMPONENT_HEIGHT / 30,
  cloud_height: SUN_IMAGE_SIZE,
  cloud_width: SUN_IMAGE_SIZE,
  sun_height: SMALL_COMPONENT_HEIGHT / 5,
  sun_width: SMALL_COMPONENT_HEIGHT / 5,
  center_position: PAGE_WIDTH / 2 - SUN_IMAGE_SIZE / 2,
  center_position_top: HEIGHT_2_3RD / 4.5,
  left: PAGE_WIDTH - SUN_IMAGE_SIZE * 1.1,
};

const MOON_IMAGE_SIZE = SMALL_COMPONENT_HEIGHT / 2.4;
export const MOON_IMAGE = {
  right: SMALL_COMPONENT_HEIGHT / 20,
  top: SMALL_COMPONENT_HEIGHT / 30,
  moon_height: MOON_IMAGE_SIZE,
  moon_width: MOON_IMAGE_SIZE,
  center_position: PAGE_WIDTH / 2 - MOON_IMAGE_SIZE / 2,
  center_position_top: HEIGHT_2_3RD / 4.5,
  left: PAGE_WIDTH - MOON_IMAGE_SIZE,
};

export const weatherDataComponent = ({ name, number, sign }: any) => {
  return (
    <View style={{ alignItems: "center" }}>
      <AppText.Text
        style={{ fontSize: 12, color: DefaultTheme.colors.surface }}
      >
        {name}
      </AppText.Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
          marginTop: DefaultTheme.padding.small,
        }}
      >
        <AppText.Text
          style={{
            fontSize: 36,
            fontWeight: "500",
            color: DefaultTheme.colors.surface,
          }}
        >
          {number}
        </AppText.Text>

        <AppText.Text
          style={{
            fontSize: 12,
            fontWeight: "300",
            paddingBottom: DefaultTheme.padding.medium,
            paddingLeft: DefaultTheme.padding.extra_small,
            color: DefaultTheme.colors.surface,
          }}
        >
          {sign}
        </AppText.Text>
      </View>
    </View>
  );
};
