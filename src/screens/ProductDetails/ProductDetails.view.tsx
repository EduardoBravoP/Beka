import { Image, Text, TouchableOpacity, View } from "react-native";
import { Header } from "../../components/Header";
import { styles } from "./styles";
import { Button } from "../../components/Button";
import Icon from "react-native-vector-icons/Feather";
import { ProductDetailsViewModel } from "./ProductDetails.model";
import { SafeAreaView } from "react-native-safe-area-context";

function ProductDetailsView({
  product,
  handleGoBack
}: ProductDetailsViewModel) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header
          title="Product Details"
          leftIcon="arrow-left"
          onLeftIconPress={handleGoBack}
        />

        <View style={styles.contentContainer}>
          <Image source={product.image} style={styles.image} />

          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.description}>{product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
          </Text>

          <View style={styles.actions}>
            <View style={styles.buttonWrapper}>
              <Button label="Add to Cart" />
            </View>
            <TouchableOpacity style={styles.favoriteButton}>
              <Icon name="heart" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export { ProductDetailsView };