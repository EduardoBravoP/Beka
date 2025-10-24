import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { ProductDetails } from '../screens/ProductDetails';
import { HomeStackParamList } from '../@types/navigation';

const Stack = createStackNavigator<HomeStackParamList>();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#161631'
        },
        animation: "none"
      }}
    >
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
}