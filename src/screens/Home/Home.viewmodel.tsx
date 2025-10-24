import { HomeViewModel, NavigationProp } from "./Home.model";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { mockProducts } from "../../utils/mockProducts";

function useHomeViewModel(): HomeViewModel {
  const navigation = useNavigation<NavigationProp>();
  const insets = useSafeAreaInsets();
  
  return {
    products: mockProducts,
    navigation,
    insets
  };
}

export { useHomeViewModel };