import { NavigationProp, OrderItem, OrdersViewModel } from "./Orders.model";
import MacbookImg from "../../../assets/images/Macbook.png";
import BudsImg from "../../../assets/images/Earbuds.png";
import { useNavigation } from "@react-navigation/native";

function useOrdersViewModel(): OrdersViewModel {
  const navigation = useNavigation<NavigationProp>();

  const mockProducts: OrderItem[] = [
    {
      id: "3",
      title: "MacBook Pro 14\" M3",
      description: "Powerful performance",
      price: 14999,
      image: MacbookImg,
      quantity: 1,
      purchasedAt: "10/21/2025"
    },
    {
      id: "4",
      title: "Bluetooth Earbuds",
      description: "Noise cancellation",
      price: 399,
      image: BudsImg,
      quantity: 2,
      purchasedAt: "10/10/2025"
    }
  ];
  
  return {
    orders: mockProducts,
    navigation
  };
}

export { useOrdersViewModel };
