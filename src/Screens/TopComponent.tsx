import React, { useEffect } from "react";
import { Image, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import AppText from "../Components/AppText";
import {
  OptionsIcon,
  TemperatureCelcius,
  ThreeDotsIcon,
} from "../Constants/AppIcons";
import { black, blue500, blue800 } from "../Constants/colors";
import DefaultTheme from "../Constants/DefaultTheme";
import {
  BORDER_RADIUS,
  HEIGHT_2_3RD,
  MOON_IMAGE,
  PAGE_PADDING_BOTTOM,
  PAGE_WIDTH,
  SMALL_COMPONENT_HEIGHT,
  SUN_IMAGE,
  time,
  weatherDataComponent,
} from "./HomeConstants";

export const TopComponent = ({ animatedStylesTop, activeTime }: any) => {
  const icon_opacity = useSharedValue(0);
  const moon_right = useSharedValue(0);
  const moon_left = useSharedValue(0);
  const moon_top = useSharedValue(0);
  const moon_scale = useSharedValue(0);
  const current_percentage = 32;
  const temperaturTop = useSharedValue(0);
  const temperaturScale = useSharedValue(1);
  const temperature_style = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withSpring(temperaturScale.value, {
            damping: 20,
            stiffness: 90,
          }),
        },
      ],
      marginTop: withSpring(temperaturTop.value, {
        damping: 20,
        stiffness: 90,
      }),
    };
  });
  const moon_scale_style = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withSpring(moon_scale.value, {
            damping: 20,
            stiffness: 90,
          }),
        },
      ],
    };
  });
  const positions_style = useAnimatedStyle(() => {
    return {
      right: withSpring(moon_right.value, {
        damping: 20,
        stiffness: 90,
      }),
      left: withSpring(moon_left.value, {
        damping: 20,
        stiffness: 90,
      }),
      top: withSpring(moon_top.value, {
        damping: 20,
        stiffness: 90,
      }),
    };
  });
  const icon_opacityStyle = useAnimatedStyle(() => {
    return {
      opacity: withSpring(icon_opacity.value, {
        damping: 20,
        stiffness: 90,
      }),
    };
  });
  useEffect(() => {
    if (activeTime == time.DAY) {
      icon_opacity.value = 1;
      setTimeout(() => {
        temperaturScale.value = 1;
        temperaturTop.value = 0;
        moon_right.value = 0;
        moon_left.value = SUN_IMAGE.center_position;
        moon_top.value = SUN_IMAGE.center_position_top;
        moon_scale.value = 1.6;
      }, 200);
    } else {
      icon_opacity.value = 0;
      setTimeout(() => {
        temperaturScale.value = 0.85;
        temperaturTop.value = -HEIGHT_2_3RD / 1.25 / 1.5;
        moon_right.value = SUN_IMAGE.right;
        moon_left.value = SUN_IMAGE.left;
        moon_top.value = SUN_IMAGE.top;
        moon_scale.value = 1;
      }, 200);
    }
  }, [activeTime]);
  const CloudSunImage = () => (
    <View
      style={{
        padding: 20,
        position: "absolute",
        zIndex: 3,
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <Animated.View
        style={[
          {
            position: "absolute",
          },
          positions_style,
        ]}
      >
        <Animated.Image
          source={require("../assets/images/sun.png")}
          defaultSource={require("../assets/images/sun.png")}
          style={[
            {
              height: SUN_IMAGE.sun_height,
              width: SUN_IMAGE.sun_width,
              zIndex: 0,
              marginTop: 10,
              marginLeft: SMALL_COMPONENT_HEIGHT / 5,
            },
            moon_scale_style,
          ]}
          resizeMode="contain"
        />
        <Animated.Image
          source={require("../assets/images/cloud.png")}
          defaultSource={require("../assets/images/cloud.png")}
          style={[
            {
              height: SUN_IMAGE.cloud_height,
              width: SUN_IMAGE.cloud_width,
              position: "absolute",
              opacity: 0.95,
            },
            moon_scale_style,
          ]}
          resizeMode="contain"
        />
      </Animated.View>
    </View>
  );
  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: BORDER_RADIUS,
        elevation: 2,
        shadowColor: black,
        shadowOpacity: 0.2,
        shadowOffset: {
          height: 1,
          width: 1,
        },
        zIndex: 5,
      }}
    >
      <LinearGradient
        colors={[blue500, blue800]}
        style={{
          flex: 1,
          borderRadius: BORDER_RADIUS,
        }}
      >
        <View style={{ padding: 20, flexDirection: "row" }}>
          <View
            style={{
              flex: 1,
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <AppText.HeaderText
              style={{ color: DefaultTheme.colors.surface, fontSize: 18 }}
            >
              Day
            </AppText.HeaderText>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              paddingTop: 5,
            }}
          >
            <ThreeDotsIcon size={24} />
          </View>
          <Animated.View
            style={[
              {
                flex: 1,
                alignItems: "flex-end",
                justifyContent: "center",
              },
              icon_opacityStyle,
            ]}
          >
            <OptionsIcon size={24} />
          </Animated.View>
        </View>
        <CloudSunImage />
        <View
          style={{
            paddingBottom: PAGE_PADDING_BOTTOM,
          }}
        >
          <View
            style={{ height: HEIGHT_2_3RD / 1.25, justifyContent: "flex-end" }}
          >
            <View
              style={{
                alignItems: "center",
              }}
            >
              <View style={{ marginBottom: 60 }}>
                <Animated.View
                  style={[{ alignItems: "center" }, temperature_style]}
                >
                  <AppText.Text
                    style={{
                      fontSize: 72,
                      fontWeight: "bold",
                      color: DefaultTheme.colors.surface,
                    }}
                  >
                    {24}
                  </AppText.Text>
                  <View style={{ position: "absolute", top: 15, right: -7.5 }}>
                    {TemperatureCelcius({ size: 10 })}
                  </View>
                </Animated.View>
                <Animated.Text
                  style={[
                    {
                      fontSize: 20,
                      fontWeight: "500",
                      color: DefaultTheme.colors.surface,
                    },
                    icon_opacityStyle,
                  ]}
                >
                  {"Monterey"}
                </Animated.Text>
              </View>
            </View>

            <Animated.View
              style={[
                {
                  flexDirection: "row",
                  alignItems: "flex-end",
                },
                icon_opacityStyle,
              ]}
            >
              <View style={{ flex: 1 }}>
                {weatherDataComponent({
                  name: "Wind",
                  number: 15,
                  sign: "km",
                })}
              </View>
              <View style={{ flex: 1 }}>
                {weatherDataComponent({
                  name: "Humidity",
                  number: current_percentage,
                  sign: "%",
                })}
              </View>
              <View style={{ flex: 1 }}>
                {weatherDataComponent({
                  name: "Precipitation",
                  number: 87,
                  sign: "%",
                })}
              </View>
            </Animated.View>
          </View>
        </View>
        {/* <Animated.Image
          style={[
            {
              width: PAGE_WIDTH,
              opacity: 0.5,
              borderRadius: BORDER_RADIUS,
              tintColor: DefaultTheme.colors.blue_dark,
              zIndex: 0,
              position: "absolute",
            },
            animatedStylesTop,
          ]}
          resizeMode="repeat"
          source={require("../assets/images/overlay.jpg")}
          defaultSource={require("../assets/images/overlay.jpg")}
        /> */}
      </LinearGradient>
    </View>
  );
};
