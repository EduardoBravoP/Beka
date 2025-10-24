import { ProductDetailsView } from "./ProductDetails.view";
import { useProductDetailsViewModel } from "./ProductDetails.viewmodel";

function ProductDetails() {
  const props = useProductDetailsViewModel();

  return <ProductDetailsView {...props} />;
}

export { ProductDetails };