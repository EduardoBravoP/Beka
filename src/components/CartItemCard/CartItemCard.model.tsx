import { ImageSourcePropType } from "react-native";

export interface CartItemCardViewModel {
  title: string;
  description: string;
  price: number;
  image: ImageSourcePropType;
  quantity: number;
}

export interface CartItemCardProps {
  title: string;
  description: string;
  price: number;
  image: ImageSourcePropType;
  quantity: number;
}