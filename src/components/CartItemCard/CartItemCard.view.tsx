import { Image, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { CartItemCardViewModel } from "./CartItemCard.model";
import { styles } from "./styles";

function CartItemCardView({
  title,
  description,
  price,
  quantity,
  image
}: CartItemCardViewModel) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>
          {price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
        </Text>

        <View style={styles.actions}>
          <View style={styles.quantityControl}>
            <TouchableOpacity
              disabled={quantity <= 1}
              style={[
                styles.quantityButton,
                quantity <= 1 && styles.disabledButton
              ]}
            >
              <Icon name="minus" size={16} color={quantity > 1 ? "#FE6C5C" : "#9090AA"} />
            </TouchableOpacity>
            <Text>{quantity}</Text>
            <TouchableOpacity style={styles.quantityButton}>
              <Icon name="plus" size={16} color="#FE6C5C" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.deleteButton}>
            <Icon name="trash-2" size={16} color="#9090AA" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export { CartItemCardView };