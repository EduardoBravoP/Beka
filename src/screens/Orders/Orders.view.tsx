import { FlatList, View } from "react-native";
import { Header } from "../../components/Header";
import { OrderItemCard } from "../../components/OrderItemCard";
import { OrdersViewModel } from "./Orders.model";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { DrawerWrapper } from "../../components/DrawerWrapper";

function OrdersView({ orders, navigation }: OrdersViewModel) {
  return (
    <SafeAreaView>
      <DrawerWrapper>
        <View style={styles.container}>
          <Header
            title="Orders"
            leftIcon="menu"
            onLeftIconPress={() => {
              navigation.toggleDrawer();
            }}
          />

          <View style={styles.contentContainer}>
            <FlatList
              data={orders}
              renderItem={({ item }) => (
                <OrderItemCard
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  quantity={item.quantity}
                  image={item.image}
                  purchasedAt={item.purchasedAt}
                />
              )}
              keyExtractor={(item) => item.id}
              style={styles.list}
            />
          </View>
        </View>
      </DrawerWrapper>
    </SafeAreaView>
  )
}

export { OrdersView };