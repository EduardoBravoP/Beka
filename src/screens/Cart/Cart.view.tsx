import { FlatList, Text, View } from "react-native";
import { CartViewModel } from "./Cart.model";
import { Header } from "../../components/Header";
import { styles } from "./styles";
import { CartItemCard } from "../../components/CartItemCard";
import { Button } from "../../components/Button";
import { DrawerWrapper } from "../../components/DrawerWrapper";

function CartView({ cartItems, totalAmount, navigation, insets }: CartViewModel) {
  return (
    <DrawerWrapper>
      <View style={{...styles.container, paddingTop: insets.top}}>
        <Header
          title="Cart"
          leftIcon="menu"
          onLeftIconPress={() => {
            navigation.toggleDrawer();
          }}
        />

        <View style={styles.contentContainer}>
          <FlatList
            data={cartItems}
            renderItem={({ item }) => (
              <CartItemCard
                title={item.title}
                description={item.description}
                price={item.price}
                quantity={item.quantity}
                image={item.image}
              />
            )}
            keyExtractor={(item) => item.id}
            style={styles.list}
          />

          <View style={styles.totalContainer}>
            <Text style={styles.priceLabel}>Total</Text>
            <Text style={styles.priceText}>
              {totalAmount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
            </Text>
          </View>

          <Button label="Checkout" />
        </View>
      </View>
    </DrawerWrapper>
  )
}

export { CartView };