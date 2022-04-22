import { View, Text, Image, ImageProps } from "react-native";
import React, { useEffect } from "react";
import DefaultTheme from "../Constants/DefaultTheme";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import AppDimensions from "../Constants/AppDimensions";

interface RoundProfileProps {
  imageStyle?: ImageProps["style"];
  height?: number;
  width?: number;
  source: ImageProps["source"];
  resizeMode?: ImageProps["resizeMode"];
  showIndex: any;
}
const RoundProfile = (props: RoundProfileProps) => {
  const IMAGE_SIZE = AppDimensions.width / 3;
  const TO_IMAGE_SIZE = (DefaultTheme.padding.medium * 2 + 20) * 1.2;
  const MAX_SCALE = 1;
  const MIN_SCALE = (TO_IMAGE_SIZE * 1.2) / IMAGE_SIZE;
  const offset = useSharedValue(IMAGE_SIZE + TO_IMAGE_SIZE);
  const image_size = useSharedValue(IMAGE_SIZE);
  const prof_scale = useSharedValue(MAX_SCALE);

  useEffect(() => {
    // offset.value = 0;
    if (props.showIndex === null) {
      image_size.value = IMAGE_SIZE;
      offset.value = IMAGE_SIZE + TO_IMAGE_SIZE;
      prof_scale.value = MAX_SCALE;
    } else {
      image_size.value = TO_IMAGE_SIZE;
      offset.value = -TO_IMAGE_SIZE;
      prof_scale.value = MIN_SCALE;
    }
  }, [props.showIndex]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      // transform: [
      //   {
      //     translateY: withSpring(offset.value, {
      //       damping: 20,
      //       stiffness: 90,
      //     }),
      //   },
      //   {
      //     scale: withSpring(prof_scale.value, {
      //       damping: 20,
      //       stiffness: 90,
      //     }),
      //   },
      // ],
      height: withSpring(image_size.value, {
        damping: 20,
        stiffness: 90,
      }),
      width: withSpring(image_size.value, {
        damping: 20,
        stiffness: 90,
      }),
    };
  });
  const animatedStylesImage = useAnimatedStyle(() => {
    return {
      // transform: [
      //   {
      //     translateY: withSpring(offset.value, {
      //       damping: 20,
      //       stiffness: 90,
      //     }),
      //   },
      //   {
      //     scale: withSpring(prof_scale.value, {
      //       damping: 20,
      //       stiffness: 90,
      //     }),
      //   },
      // ],
      height: withSpring(image_size.value / 1.1, {
        damping: 20,
        stiffness: 90,
      }),
      width: withSpring(image_size.value / 1.1, {
        damping: 20,
        stiffness: 90,
      }),
    };
  });

  return (
    <Animated.View
      style={[
        {
          borderRadius: 1000,
          borderWidth: DefaultTheme.borderWidth.slim,
          padding: DefaultTheme.padding.extra_small,
          alignItems: "center",
          justifyContent: "center",
        },
        animatedStyles,
      ]}
    >
      <Animated.Image
        style={[
          {
            borderRadius: 1000,
            flexWrap: "wrap",
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
          },
          // {
          //   height: props.height / 1.1,
          //   width: props.width / 1.1,
          // },
          animatedStylesImage,
        ]}
        source={props.source}
        resizeMode={props.resizeMode ?? "cover"}
      />
    </Animated.View>
  );
};

export default RoundProfile;
