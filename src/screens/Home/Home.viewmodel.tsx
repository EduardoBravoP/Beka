import { HomeViewModel, NavigationProp } from "./Home.model";
import HeadphoneImg from "../../../assets/images/Headphone.png";
import KeyboardImg from "../../../assets/images/Keyboard.png";
import MacbookImg from "../../../assets/images/Macbook.png";
import BudsImg from "../../../assets/images/Earbuds.png";
import { Product } from "../../types/Product";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function useHomeViewModel(): HomeViewModel {
  const navigation = useNavigation<NavigationProp>();
  const insets = useSafeAreaInsets();

  const mockProducts: Product[] = [
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
    {
      id: "3",
      title: "MacBook Pro 14\" M3",
      description: "Powerful performance",
      price: 14999,
      image: MacbookImg
    },
    {
      id: "4",
      title: "Bluetooth Earbuds",
      description: "Noise cancellation",
      price: 399,
      image: BudsImg
    }
  ];
  
  return {
    products: mockProducts,
    navigation,
    insets
  };
}

export { useHomeViewModel };