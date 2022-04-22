import { Pressable, TouchableNativeFeedback, View } from "react-native";
import React, { useState } from "react";
import DefaultTheme from "../Constants/DefaultTheme";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import {
  BORDER_RADIUS,
  HEIGHT_1_3RD,
  LARGE_COMPONENT_HEIGHT,
  PAGE_PADDING_BOTTOM,
  PAGE_PADDING_HORIZONTAL,
  PAGE_PADDING_TOP,
  PAGE_WIDTH,
  SMALL_COMPONENT_HEIGHT,
  time,
} from "./HomeConstants";
import { BottomComponent } from "./BottomComponent";
import { TopComponent } from "./TopComponent";

const Home = () => {
  const top_component_height = useSharedValue(LARGE_COMPONENT_HEIGHT);
  const bottom_component_height = useSharedValue(SMALL_COMPONENT_HEIGHT);
  const [activeTime, setActiveTime] = useState(time.DAY);
  const animatedStylesTop = useAnimatedStyle(() => {
    return {
      height: withSpring(top_component_height.value, {
        damping: 20,
        stiffness: 90,
      }),
    };
  });
  const animatedStylesBottom = useAnimatedStyle(() => {
    return {
      height: withSpring(bottom_component_height.value, {
        damping: 20,
        stiffness: 90,
      }),
    };
  });
  const setDayActive = () => {
    setActiveTime(time.DAY);
    setTimeout(() => {
      top_component_height.value = LARGE_COMPONENT_HEIGHT;
      bottom_component_height.value = SMALL_COMPONENT_HEIGHT;
    }, 200);
  };
  const setNightActive = () => {
    setActiveTime(time.NIGHT);
    setTimeout(() => {
      top_component_height.value = SMALL_COMPONENT_HEIGHT;
      bottom_component_height.value = LARGE_COMPONENT_HEIGHT;
    }, 200);
  };

  return (
    <View
      style={{
        backgroundColor: DefaultTheme.colors.background,
        flex: 1,
        paddingTop: PAGE_PADDING_TOP,
        paddingBottom: PAGE_PADDING_BOTTOM,
        paddingHorizontal: PAGE_PADDING_HORIZONTAL,
      }}
    >
      <Animated.View
        style={[
          {
            width: PAGE_WIDTH,
            borderRadius: BORDER_RADIUS,
          },
          animatedStylesTop,
        ]}
      >
        <TouchableNativeFeedback
          style={{ flex: 1 }}
          onPress={() => {
            setDayActive();
          }}
        >
          {TopComponent({
            animatedStylesTop,
            activeTime,
          })}
        </TouchableNativeFeedback>
      </Animated.View>
      <Animated.View
        style={[
          {
            width: PAGE_WIDTH,
            backgroundColor: DefaultTheme.colors.black_dark,
            marginTop: HEIGHT_1_3RD - SMALL_COMPONENT_HEIGHT,
            borderRadius: BORDER_RADIUS,
          },
          animatedStylesBottom,
        ]}
      >
        <TouchableNativeFeedback
          style={{
            flex: 1,
            borderRadius: BORDER_RADIUS,
          }}
          onPress={() => {
            setNightActive();
          }}
        >
          {BottomComponent({
            animatedStylesBottom,
            activeTime,
          })}
        </TouchableNativeFeedback>
      </Animated.View>
    </View>
  );
};

export default Home;
