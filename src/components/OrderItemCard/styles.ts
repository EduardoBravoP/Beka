import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#EFEFEF',
    backgroundColor: '#fff',
    marginBottom: 16,
  },
  info: {
    gap: 4,
    flex: 1,
  },
  image: {
    width: 104,
    height: 104,
    borderRadius: 8,
  },
  details: {
    flex: 1,
    justifyContent: 'space-between',
    height: '100%',
  },
  title: {
    fontSize: 14,
    color: '#000',
    fontWeight: '600',
  },
  description: {
    fontSize: 12,
    color: '#9090AA',
  },
  price: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
    marginTop: 4
  },
  bottomInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  quantityText: {
    fontSize: 12,
    color: '#000'
  },
  dateText: {
    fontSize: 12,
    color: '#9090AA'
  }
})