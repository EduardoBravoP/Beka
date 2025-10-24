import { Image, Text, TouchableOpacity, View } from "react-native";
import { ListItemCardViewModel } from "./ListItemCard.model";
import Icon from "react-native-vector-icons/Feather";
import { styles } from "./styles";

function ListItemCardView({ title, description, price, image, actionIcon, handleCardPress }: ListItemCardViewModel) {
  return (
    <TouchableOpacity style={styles.container} onPress={handleCardPress}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={image} />
      </View>

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>

      <View style={styles.actions}>
        <Text style={styles.price}>
          {price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
        </Text>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name={actionIcon} size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

export { ListItemCardView };