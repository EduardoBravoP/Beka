import { CartView } from "./Cart.view";
import { useCartViewModel } from "./Cart.viewmodel";

function Cart() {
  const props = useCartViewModel();

  return <CartView {...props} />;
}

export { Cart };