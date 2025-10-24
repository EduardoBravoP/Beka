import { ImageSourcePropType } from "react-native";

export interface ListItemCardViewModel {
  title: string;
  description: string;
  price: number;
  image: ImageSourcePropType;
  actionIcon: string;
}

export interface ListItemCardProps {
  title: string;
  description: string;
  price: number;
  image: ImageSourcePropType;
  actionIcon: string;
}