import { DrawerNavigationProp } from "@react-navigation/drawer";
import { DrawerParamList } from "../../@types/navigation";
import { Product } from "../../types/Product";

export interface OrderItem extends Product {
  quantity: number;
  purchasedAt: string;
}

export type NavigationProp = DrawerNavigationProp<DrawerParamList, 'Main'>;

export interface OrdersViewModel {
  orders: OrderItem[];
  navigation: NavigationProp;
}