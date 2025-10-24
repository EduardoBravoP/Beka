/* eslint-disable react-native/no-inline-styles */
import { useDrawerProgress } from "@react-navigation/drawer";
import { ReactNode } from "react";
import { Dimensions, Platform } from "react-native";
import Animated, { interpolate, useAnimatedStyle } from "react-native-reanimated";
import { drawerTranslateX } from "../DrawerWrapper";

const { width: W, height: H } = Dimensions.get('window');
const deg = 10;
const theta = (Math.PI / 180) * deg;

const offsetX = (H / 2) * Math.sin(theta) + (W / 2) * (1 - Math.cos(theta));
const bottomSheetTranslateX = Platform.OS === 'android' ? drawerTranslateX - 18 + offsetX : drawerTranslateX - 16 + offsetX;

function BottomTabWrapper({ children }: { children: ReactNode }) {
  const progress = useDrawerProgress();

  console.log('offsetX', offsetX);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: interpolate(
          progress.value,
          [0, 1],
          [0, bottomSheetTranslateX],
        )
      },
      {
        translateY: interpolate(
          progress.value,
          [0, 1],
          [0, -38],
        )
      },
      {
        rotate: interpolate(
          progress.value,
          [0, 1],
          [0, -10],
        ) + "deg"
      },
    ],
    borderBottomRightRadius: interpolate(
      progress.value,
      [0, 1],
      [0, 20],
    ),
    borderBottomLeftRadius: interpolate(
      progress.value,
      [0, 1],
      [0, 20],
    ),
  }))

  return (
    <Animated.View
      style={{ flex: 1, ...animatedStyle }}
    >
      {children}
    </Animated.View>
  )
}

export { BottomTabWrapper };