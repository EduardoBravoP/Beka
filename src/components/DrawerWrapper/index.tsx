/* eslint-disable react-native/no-inline-styles */
import { useDrawerProgress } from "@react-navigation/drawer";
import { ReactNode } from "react";
import Animated, { Extrapolation, interpolate, useAnimatedStyle } from "react-native-reanimated";
import { Dimensions, Platform } from "react-native";

const { width} = Dimensions.get('window');
export const drawerTranslateX = Platform.OS === 'android' ? width * 0.4 + 100 : 100;

function DrawerWrapper({ children }: { children: ReactNode }) {
  const progress = useDrawerProgress();

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: interpolate(
          progress.value,
          [0, 1],
          [0, drawerTranslateX],
          Extrapolation.CLAMP
        )
      },
      {
        translateY: interpolate(
          progress.value,
          [0, 1],
          [0, 40],
          Extrapolation.CLAMP
        )
      },
      {
        rotate: interpolate(
          progress.value,
          [0, 1],
          [0, -10],
          Extrapolation.CLAMP
        ) + "deg"
      },
    ],
    borderTopRightRadius: interpolate(
      progress.value,
      [0, 1],
      [0, 20],
    ),
    borderTopLeftRadius: interpolate(
      progress.value,
      [0, 1],
      [0, 20],
    ),
    overflow: 'hidden',
  }))

  return (
    <Animated.View
      style={{ flex: 1, ...animatedStyle }}
    >
      {children}
    </Animated.View>
  )
}

export { DrawerWrapper };