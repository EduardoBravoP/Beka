import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNavigator from "./BottomTabNavigator";
import { Orders } from "../screens/Orders";
import { DrawerParamList } from "../@types/navigation";
import { CustomDrawer } from "../components/Drawer";

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
        sceneStyle: {
          backgroundColor: '#161631',
        },
        overlayColor: 'transparent',
        drawerStatusBarAnimation: 'slide',
        drawerContentStyle: {
           backgroundColor: '#161631'
        },
        drawerContentContainerStyle: {
          backgroundColor: '#161631'
        },
        drawerType: 'front',
      }}
      drawerContent={CustomDrawer}
    >
      <Drawer.Screen name="Main" component={BottomTabNavigator} />
      <Drawer.Screen name="Orders" component={Orders} />
    </Drawer.Navigator>
  );
}