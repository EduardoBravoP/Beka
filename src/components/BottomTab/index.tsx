import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { BottomTabWrapper } from "../BottomTabWrapper";

function BottomTab({ state, descriptors, navigation }: BottomTabBarProps) {
  return (
    <BottomTabWrapper>
      <View style={[styles.container]}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              key={index}
              onPress={onPress}
              style={styles.itemContainer}
            >
              {options.tabBarIcon && options.tabBarIcon({ focused: isFocused, color: isFocused ? "#161631" : "#9090AA", size: 20 })}
              <Text style={[
                isFocused ? styles.itemTextFocused : styles.itemText
              ]}>
                {options.tabBarLabel !== undefined
                  ? options.tabBarLabel.toString()
                  : options.title !== undefined
                  ? options.title.toString()
                  : route.name.toString()}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </BottomTabWrapper>
  );
}

export { BottomTab };