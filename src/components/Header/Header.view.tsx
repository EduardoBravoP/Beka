import { Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import { styles } from "./styles";
import { HeaderViewModel } from "./Header.model";

function HeaderView({ title, leftIcon, onLeftIconPress }: HeaderViewModel) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onLeftIconPress}>
        <Icon name={leftIcon} size={24} color="#000" />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export { HeaderView };