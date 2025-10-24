import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: '100%',
    backgroundColor: '#F8F8F8'
  },
  contentContainer: {
    flex: 1,
    marginTop: 8,
  },
  list: {
    flexGrow: 0
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 24
  },
  priceLabel: {
    fontSize: 16,
    color: '#9090AA',
    fontWeight: '600',
  },
  priceText: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
  }
});