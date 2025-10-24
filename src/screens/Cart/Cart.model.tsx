import { DrawerNavigationProp } from "@react-navigation/drawer";
import { Product } from "../../types/Product";
import { DrawerParamList } from "../../@types/navigation";

export interface CartItem extends Product {
  quantity: number;
}

export type NavigationProp = DrawerNavigationProp<DrawerParamList, 'Main'>;

export interface CartViewModel {
  cartItems: CartItem[];
  totalAmount: number;
  navigation: NavigationProp;
  insets: { top: number; bottom: number; left: number; right: number; };
}