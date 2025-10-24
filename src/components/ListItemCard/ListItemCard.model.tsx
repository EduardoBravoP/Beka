import { ImageSourcePropType } from "react-native";

export interface ListItemCardViewModel {
  title: string;
  description: string;
  price: number;
  image: ImageSourcePropType;
  actionIcon: string;
  handleCardPress: () => void;
}

export interface ListItemCardProps {
  id: string;
  title: string;
  description: string;
  price: number;
  image: ImageSourcePropType;
  actionIcon: string;
}