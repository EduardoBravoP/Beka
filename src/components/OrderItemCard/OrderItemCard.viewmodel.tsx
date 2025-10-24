import { OrderItemCardProps, OrderItemCardViewModel } from "./OrderItemCard.model";

function useOrderItemCardViewModel({
  description,
  title,
  price,
  image,
  quantity,
  purchasedAt 
}: OrderItemCardProps): OrderItemCardViewModel {
  return {
    description,
    title,
    price,
    image,
    quantity,
    purchasedAt
  };
}

export { useOrderItemCardViewModel };