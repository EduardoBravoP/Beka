import { ListItemCardProps, ListItemCardViewModel } from "./ListItemCard.model";

function useListItemCardViewModel({
  title,
  description,
  price,
  image,
  actionIcon
}: ListItemCardProps): ListItemCardViewModel {
  return { title, description, price, image, actionIcon };
}

export { useListItemCardViewModel };