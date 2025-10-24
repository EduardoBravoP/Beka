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
    gap: 8
  },
  image: {
    width: '100%',
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    color: '#000',
    fontWeight: '600',
  },
  description: {
    fontSize: 16,
    color: '#9090AA',
  },
  price: {
    fontSize: 24,
    color: '#000',
    fontWeight: '600',
    marginTop: 8
  },
  actions: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
    marginTop: 16
  },
  favoriteButton: {
    backgroundColor: '#161631',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    flex: 1
  }
});