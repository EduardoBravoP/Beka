import { CartItemCardProps } from "./CartItemCard.model";
import { CartItemCardView } from "./CartItemCard.view";
import { useCartItemCardViewModel } from "./CartItemCard.viewmodel";

function CartItemCard({
  description,
  title,
  price,
  image,
  quantity
}: CartItemCardProps) {
  const props = useCartItemCardViewModel({
    description,
    title,
    price,
    image,
    quantity
  });

  return <CartItemCardView {...props} />;
}

export { CartItemCard };