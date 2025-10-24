import { ImageSourcePropType } from "react-native";

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: ImageSourcePropType;
}