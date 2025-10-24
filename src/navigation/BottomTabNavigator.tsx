/* eslint-disable react/no-unstable-nested-components */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackNavigator from "./HomeStackNavigator";
import { Cart } from "../screens/Cart";
import { Favorites } from "../screens/Favorites";
import { TabParamList } from "../@types/navigation";
import { BottomTab } from "../components/BottomTab";
import Icon from "react-native-vector-icons/Feather";

const Tab = createBottomTabNavigator<TabParamList>();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        sceneStyle: {
          backgroundColor: '#161631'
        },
      }}
      tabBar={BottomTab}
    >
      <Tab.Screen name="Home" component={HomeStackNavigator} options={{
        tabBarIcon: ({color}) => <Icon name="home" size={20} color={color} />
      }} />
      <Tab.Screen name="Cart" component={Cart} options={{
        tabBarIcon: ({color}) => <Icon name="shopping-cart" size={20} color={color} />
      }} />
      <Tab.Screen name="Favorites" component={Favorites} options={{
        tabBarIcon: ({color}) => <Icon name="heart" size={20} color={color} />
      }} />
    </Tab.Navigator>
  );
}