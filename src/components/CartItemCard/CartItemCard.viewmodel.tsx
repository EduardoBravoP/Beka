import { CartItemCardProps, CartItemCardViewModel } from "./CartItemCard.model";

function useCartItemCardViewModel({
  description,
  title,
  price,
  image,
  quantity
}: CartItemCardProps): CartItemCardViewModel {
  return {
    description,
    title,
    price,
    image,
    quantity
  };
}

export { useCartItemCardViewModel };