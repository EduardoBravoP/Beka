import { Text, TouchableOpacity } from "react-native";
import { ButtonViewModel } from "./Button.model";
import { styles } from "./styles";

function ButtonView({ label }: ButtonViewModel) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  )
}

export { ButtonView };