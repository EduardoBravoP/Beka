import { ProductDetailsView } from "./ProductDetails.view";
import { useProductDetailsViewModel } from "./ProductDetails.viewmodel";

function ProductDetails() {
  const { title, description, price, image } = {
    title: "MacBook Pro 16\"",
    description:
      "The MacBook Pro 16-inch features a stunning Retina display, powerful processors, and advanced graphics for professionals who demand the best performance.",
    price: 2499,
    image: require("../../../assets/images/Macbook.png")
  };

  const props = useProductDetailsViewModel({
    title,
    description,
    price,
    image
  });

  return <ProductDetailsView {...props} />;
}

export { ProductDetails };