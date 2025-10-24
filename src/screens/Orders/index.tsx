import { OrdersView } from "./Orders.view";
import { useOrdersViewModel } from "./Orders.viewmodel";

function Orders() {
  const props = useOrdersViewModel();

  return <OrdersView {...props} />;
}

export { Orders };