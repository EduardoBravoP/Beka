import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const { width } = Dimensions.get('window');

const CARD_GAP = 16;
const CARD_WIDTH = ((width - CARD_GAP * 3) / 2);

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#EFEFEF',
    gap: 8,
    maxWidth: CARD_WIDTH,
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    aspectRatio: 1,
    borderRadius: 8,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
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
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  price: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
  },
  actionButton: {
    backgroundColor: '#161631',
    padding: 4,
    borderRadius: 8,
  }
})