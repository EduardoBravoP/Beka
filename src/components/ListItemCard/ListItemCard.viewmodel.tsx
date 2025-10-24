import { NavigationProp, useNavigation } from "@react-navigation/native";
import { ListItemCardProps, ListItemCardViewModel } from "./ListItemCard.model";
import { HomeStackParamList } from "../../@types/navigation";

function useListItemCardViewModel({
  id,
  title,
  description,
  price,
  image,
  actionIcon
}: ListItemCardProps): ListItemCardViewModel {
  const navigation = useNavigation<NavigationProp<HomeStackParamList>>();

  const handleCardPress = () => {
    navigation.navigate("ProductDetails", { id });
  }

  return { title, description, price, image, actionIcon, handleCardPress };
}

export { useListItemCardViewModel };