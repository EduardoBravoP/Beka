import { OrderItemCardProps } from "./OrderItemCard.model";
import { OrderItemCardView } from "./OrderItemCard.view";
import { useOrderItemCardViewModel } from "./OrderItemCard.viewmodel";

function OrderItemCard({
  description,
  title,
  price,
  image,
  quantity,
  purchasedAt
}: OrderItemCardProps) {
  const props = useOrderItemCardViewModel({
    description,
    title,
    price,
    image,
    quantity,
    purchasedAt
  });

  return <OrderItemCardView {...props} />;
}

export { OrderItemCard };