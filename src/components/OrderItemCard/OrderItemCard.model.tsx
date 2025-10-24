import { ImageSourcePropType } from "react-native";

export interface OrderItemCardViewModel {
  title: string;
  description: string;
  price: number;
  image: ImageSourcePropType;
  quantity: number;
  purchasedAt: string;
}

export interface OrderItemCardProps {
  title: string;
  description: string;
  price: number;
  image: ImageSourcePropType;
  quantity: number;
  purchasedAt: string;
}