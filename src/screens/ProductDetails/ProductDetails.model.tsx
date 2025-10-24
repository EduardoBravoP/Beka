import { ImageSourcePropType } from "react-native";
import { Product } from "../../types/Product";

export interface ProductDetailsViewModel {
  product: Product;
  handleGoBack: () => void;
}

export interface ProductDetailsProps {
  title: string;
  description: string;
  price: number;
  image: ImageSourcePropType;
}