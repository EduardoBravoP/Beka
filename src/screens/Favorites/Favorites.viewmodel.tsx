import { useNavigation } from "@react-navigation/native";
import HeadphoneImg from "../../../assets/images/Headphone.png";
import KeyboardImg from "../../../assets/images/Keyboard.png";
import { Product } from "../../types/Product";
import { FavoritesViewModel, NavigationProp } from "./Favorites.model";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function useFavoritesViewModel(): FavoritesViewModel {
  const navigation = useNavigation<NavigationProp>();
  const insets = useSafeAreaInsets();

  const mockFavorites: Product[] = [
    {
      id: "1",
      title: "Wireless Headphones",
      description: "Premium sound quality",
      price: 129,
      image: HeadphoneImg
    },
    {
      id: "2",
      title: "Mechanical Keyboard",
      description: "RGB lighting",
      price: 299,
      image: KeyboardImg
    },
  ];
  
  return {
    favorites: mockFavorites,
    navigation,
    insets
  };
}

export { useFavoritesViewModel };