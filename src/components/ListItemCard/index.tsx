import { ListItemCardProps } from "./ListItemCard.model";
import { ListItemCardView } from "./ListItemCard.view";
import { useListItemCardViewModel } from "./ListItemCard.viewmodel";

function ListItemCard({
  title,
  description,
  price,
  image,
  actionIcon
}: ListItemCardProps) {
  const props = useListItemCardViewModel({
    title,
    description,
    price,
    image,
    actionIcon
  });

  return <ListItemCardView {...props} />;
}

export { ListItemCard };