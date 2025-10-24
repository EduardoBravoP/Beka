import { Image, Text, View } from "react-native";
import { OrderItemCardViewModel } from "./OrderItemCard.model";
import { styles } from "./styles";

function OrderItemCardView({
  title,
  description,
  price,
  quantity,
  image,
  purchasedAt
}: OrderItemCardViewModel) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>
          {price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
        </Text>

        <View style={styles.bottomInfo}>
          <Text style={styles.quantityText}>Quantity: {quantity}</Text>

          <Text style={styles.dateText}>{purchasedAt}</Text>
        </View>
      </View>
    </View>
  );
}

export { OrderItemCardView };