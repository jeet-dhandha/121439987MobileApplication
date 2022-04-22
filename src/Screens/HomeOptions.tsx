import { View, Text, Image, Pressable } from "react-native";
import React, { useState } from "react";
import DefaultTheme from "../Constants/DefaultTheme";
import AppText from "../Components/AppText";
import { LocationIcon, RightAngularIcon } from "../Constants/AppIcons";
import { grey100, grey700, grey900 } from "../Constants/colors";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const HomeOptions = ({ onIndexChange }: any) => {
  const [showIndex, setShowIndex] = useState(0);
  const itemHeight = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      height: withSpring(itemHeight.value, {
        damping: 20,
        stiffness: 90,
      }),
    };
  });
  const LIST = [
    {
      title: "My Information",
      type: "MENU",
      options: [
        {
          name: "Payment Methods",
        },
        {
          name: "Language",
        },
        {
          name: "About Us",
        },
        {
          name: "Help",
        },
      ],
      color: DefaultTheme.colors.primary,
    },
    {
      title: "Appartments",
      type: "LIST",
      list: [
        {
          name: "Unit 4088",
          address: "4517 Washington Ave",
          image: require("../assets/images/flat.jpg"),
        },
      ],
      code: "Z6708",
      codeDescription: "Roommates can access the app using this code",
      color: DefaultTheme.colors.accent,
    },
  ];
  const getItemHeight = (list) => {
    const main_height = 65 + 40;
    let sum_height = 0;
    if (list?.length) {
      list.forEach((item) => {
        sum_height = sum_height + (17.5 * 2 + 19.5);
      });
    }
    return main_height + sum_height;
  };
  const ListView = ({
    item,
    index,
    item_key,
  }: {
    item: any;
    index: number;
    item_key: string;
  }) => (
    <Pressable
      key={item_key}
      onPress={() => {
        if (showIndex === index) {
          setTimeout(() => {
            if (item.type === "MENU") {
              itemHeight.value = 0;
            }
          }, 100);
          onIndexChange(null);
          setShowIndex(null);
        } else {
          setTimeout(() => {
            if (item.type === "MENU") {
              itemHeight.value = getItemHeight(item?.options);
            }
          }, 100);
          onIndexChange(index);
          setShowIndex(index);
        }
      }}
      style={{
        backgroundColor: item.color,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 30,
        paddingVertical: 30,
        paddingBottom: LIST.length - 1 == index ? 40 : 60,
        marginTop: index != 0 ? -30 : 0,
      }}
    >
      <AppText.BoldHeader style={{ color: DefaultTheme.colors.surface }}>
        {item.title}
      </AppText.BoldHeader>
      <View>
        <View>
          {item.type === "MENU" ? (
            <View>
              {item?.options ? (
                <Animated.View style={[animatedStyles]}>
                  <View
                    style={{
                      paddingTop: 65,
                      paddingBottom: 40,
                    }}
                  >
                    {item?.options.map((sub_item, sub_index) => {
                      const thisKey = item_key + `${sub_index}` + `${index}`;
                      return (
                        <View
                          key={thisKey}
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            borderBottomWidth: 0.19,
                            borderColor: DefaultTheme.colors.surface,
                            paddingVertical: 17.5,
                          }}
                        >
                          <AppText.Text
                            style={{
                              color: DefaultTheme.colors.surface,
                              fontSize: 16,
                              fontWeight: "300",
                            }}
                          >
                            {sub_item.name}
                          </AppText.Text>
                          <RightAngularIcon
                            size={15}
                            color={DefaultTheme.colors.surface}
                          />
                        </View>
                      );
                    })}
                  </View>
                </Animated.View>
              ) : null}
            </View>
          ) : item.type === "LIST" ? (
            <View>
              {item?.list
                ? item?.list.map((sub_item, sub_index) => {
                    const thisKey = item_key + `${sub_index}` + `${index}`;
                    return (
                      <View
                        key={thisKey}
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                          marginVertical: 22.5,
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <Image
                            source={sub_item.image}
                            style={{
                              height: 50,
                              width: 50,
                              borderRadius: 500,
                            }}
                          />
                          <View
                            style={{
                              paddingLeft: DefaultTheme.padding.extra_large,
                            }}
                          >
                            <AppText.Text
                              style={{
                                color: DefaultTheme.colors.surface,
                                fontSize: 16,
                                fontWeight: "500",
                              }}
                            >
                              {sub_item.name}
                            </AppText.Text>
                            <AppText.Text
                              style={{
                                color: DefaultTheme.colors.borderColor,
                                fontSize: 14,
                                marginTop: 5,
                              }}
                            >
                              {sub_item.address}
                            </AppText.Text>
                          </View>
                        </View>
                        <View
                          style={{
                            borderRadius: 100,
                            height: 50,
                            width: 50,
                            backgroundColor: grey900,
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <LocationIcon color={DefaultTheme.colors.surface} />
                        </View>
                      </View>
                    );
                  })
                : null}
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <AppText.Text
                    style={{
                      color: DefaultTheme.colors.surface,
                      fontSize: 18,
                    }}
                  >
                    {item.code}
                  </AppText.Text>
                  <AppText.Text
                    style={{
                      color: grey700,
                      fontSize: 14,
                      marginTop: DefaultTheme.padding.medium,
                      width: "80%",
                    }}
                  >
                    {item.codeDescription}
                  </AppText.Text>
                </View>
                <RightAngularIcon color={DefaultTheme.colors.surface} />
              </View>
            </View>
          ) : null}
        </View>
      </View>
    </Pressable>
  );
  return (
    <View style={{}}>
      {LIST.map((item, index) => {
        const date = "list_" + Math.floor(Date.now() / 1000) + index;
        return (
          <ListView key={date} item={item} index={index} item_key={date} />
        );
      })}
    </View>
  );
};

export default HomeOptions;
