import { CartItem, CartViewModel, NavigationProp } from "./Cart.model";
import MacbookImg from "../../../assets/images/Macbook.png";
import BudsImg from "../../../assets/images/Earbuds.png";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function useCartViewModel(): CartViewModel {
  const navigation = useNavigation<NavigationProp>();
  const insets = useSafeAreaInsets();

  const mockProducts: CartItem[] = [
    {
      id: "3",
      title: "MacBook Pro 14\" M3",
      description: "Powerful performance",
      price: 14999,
      image: MacbookImg,
      quantity: 1
    },
    {
      id: "4",
      title: "Bluetooth Earbuds",
      description: "Noise cancellation",
      price: 399,
      image: BudsImg,
      quantity: 2
    }
  ];

  const totalAmount = mockProducts.reduce((acc, item) => {
    return acc + item.price * item.quantity
  }, 0);
  
  return {
    cartItems: mockProducts,
    totalAmount,
    navigation,
    insets
  };
}

export { useCartViewModel };
