import { FlatList, View } from "react-native";
import { Header } from "../../components/Header";
import { ListItemCard } from "../../components/ListItemCard";
import { styles } from "./styles";
import { FavoritesViewModel } from "./Favorites.model";
import { DrawerWrapper } from "../../components/DrawerWrapper";

function FavoritesView({ favorites, navigation, insets }: FavoritesViewModel) {
  return (
    <DrawerWrapper>
      <View style={{...styles.container, paddingTop: insets.top}}>
        <Header
          title="Favorites"
          leftIcon="menu"
          onLeftIconPress={() => {
            navigation.toggleDrawer();
          }}
        />

        <View style={styles.listContainer}>
          <FlatList
            data={favorites}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ListItemCard
                title={item.title}
                description={item.description}
                price={item.price}
                image={item.image}
                actionIcon="trash"
              />
            )}
            numColumns={2}
            columnWrapperStyle={styles.listColumn}
          />
        </View>
      </View>
    </DrawerWrapper>
  )
}

export { FavoritesView };