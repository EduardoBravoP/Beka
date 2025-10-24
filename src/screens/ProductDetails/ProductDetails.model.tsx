import { ImageSourcePropType } from "react-native";

export interface ProductDetailsViewModel {
  title: string;
  description: string;
  price: number;
  image: ImageSourcePropType;
}

export interface ProductDetailsProps {
  title: string;
  description: string;
  price: number;
  image: ImageSourcePropType;
}