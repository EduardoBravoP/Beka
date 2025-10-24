import { FlatList, View } from "react-native";
import { ListItemCard } from "../../components/ListItemCard";
import { HomeViewModel } from "./Home.model";
import { Header } from "../../components/Header";
import { styles } from "./styles";
import { DrawerWrapper } from "../../components/DrawerWrapper";

function HomeView({ products, navigation, insets }: HomeViewModel) {
  return (
    <DrawerWrapper>
      <View style={{...styles.container, paddingTop: insets.top}}>
        <Header
          title="Home"
          leftIcon="menu"
          onLeftIconPress={() => {
            navigation.toggleDrawer();
          }}
        />

        <View style={styles.listContainer}>
          <FlatList
            data={products}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ListItemCard
                id={item.id}
                title={item.title}
                description={item.description}
                price={item.price}
                image={item.image}
                actionIcon="plus"
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

export { HomeView };