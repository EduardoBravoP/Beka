import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderTopColor: "#EFEFEF",
    height: 74
  },
  itemContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
  itemText: {
    color: "#9090AA",
    fontSize: 12
  },
  itemTextFocused: {
    color: "#161631",
    fontSize: 12,
    fontWeight: "bold"
  }
})