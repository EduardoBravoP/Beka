import { useNavigation, useRoute } from "@react-navigation/native";
import { ProductDetailsViewModel } from "./ProductDetails.model";
import { mockProducts } from "../../utils/mockProducts";
import { Product } from "../../types/Product";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function useProductDetailsViewModel(): ProductDetailsViewModel {
  const route = useRoute();
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const handleGoBack = () => {
    navigation.goBack();
  }
  const { id } = route.params as { id: string };

  const product = mockProducts.find((item) => item.id === id) as Product;

  return {
    product,
    handleGoBack,
    insets
  }
}

export { useProductDetailsViewModel };
