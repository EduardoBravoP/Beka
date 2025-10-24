import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNavigator from "./BottomTabNavigator";
import { Orders } from "../screens/Orders";
import { DrawerParamList } from "../@types/navigation";

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#161631',
          paddingTop: 32,
          width: '40%',
          borderWidth: 0,
        },
        drawerActiveTintColor: '#FE6C5C',
        drawerInactiveTintColor: '#FFFFFF',
        drawerItemStyle: {
          borderRadius: 8
        },
        drawerLabelStyle: {
          fontSize: 20,
        },
        drawerHideStatusBarOnOpen: true,
        sceneStyle: {
          backgroundColor: '#161631',
        },
        overlayColor: 'transparent',
        drawerStatusBarAnimation: 'slide',
      }}
    >
      <Drawer.Screen name="Main" component={BottomTabNavigator} options={{ title: "Home" }} />
      <Drawer.Screen name="Orders" component={Orders} />
    </Drawer.Navigator>
  );
}