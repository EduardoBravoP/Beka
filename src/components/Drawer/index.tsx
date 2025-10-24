import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

function CustomDrawer({
  navigation,
  state
}: DrawerContentComponentProps) {
  const homeRoute = state.routes.find(r => r.name === 'Main');
  const tabState = homeRoute?.state;
  const activeTabIndex = tabState?.index ?? 0;
  const activeTabName = tabState?.routeNames?.[activeTabIndex] || "Home";
  const activeRouteName = state.routeNames[state.index];

  console.log({ activeRouteName, activeTabName, tabState });

  return (
    <View style={styles.container}>
      
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Beka</Text>
      </View>

      <View style={styles.menu}>
        <TouchableOpacity
          style={[
            styles.menuItem,
            activeRouteName === 'Main' && activeTabName === 'Home' && styles.activeMenuItem
          ]}
          onPress={() => navigation.navigate('Main', { screen: 'Home' })}
        >
          <Text style={[
            styles.menuLabel,
            activeRouteName === 'Main' && activeTabName === 'Home' && styles.activeMenuLabel
          ]}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.menuItem,
            activeRouteName === 'Main' && activeTabName === 'Cart' && styles.activeMenuItem
          ]}
          onPress={() => navigation.navigate('Main', { screen: 'Cart' })}
        >
          <Text style={[
            styles.menuLabel,
            activeRouteName === 'Main' && activeTabName === 'Cart' && styles.activeMenuLabel
          ]}>Cart</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.menuItem,
            activeRouteName === 'Main' && activeTabName === 'Favorites' && styles.activeMenuItem
          ]}
          onPress={() => navigation.navigate('Main', { screen: 'Favorites' })}
        >
          <Text style={[
            styles.menuLabel,
            activeRouteName === 'Main' && activeTabName === 'Favorites' && styles.activeMenuLabel
          ]}>Favorites</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.menuItem,
            activeRouteName === 'Orders' && styles.activeMenuItem
          ]}
          onPress={() => navigation.navigate('Orders')}
        >
          <Text style={[
            styles.menuLabel,
            activeRouteName === 'Orders' && styles.activeMenuLabel
          ]}>Orders</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.divider} />

      <TouchableOpacity style={styles.signOutButton} onPress={() => {}}>
        <Text style={styles.signOutLabel}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  )
}

export { CustomDrawer };