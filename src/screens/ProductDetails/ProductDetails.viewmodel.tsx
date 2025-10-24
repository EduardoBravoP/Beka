import { ProductDetailsProps, ProductDetailsViewModel } from "./ProductDetails.model";

function useProductDetailsViewModel({
  title,
  description,
  price,
  image
}: ProductDetailsProps): ProductDetailsViewModel {
  return {
    title,
    description,
    price,
    image
  }
}

export { useProductDetailsViewModel };
