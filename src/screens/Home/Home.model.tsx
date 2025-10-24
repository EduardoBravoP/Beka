import { Product } from "../../types/Product";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { DrawerParamList } from "../../@types/navigation";

export type NavigationProp = DrawerNavigationProp<DrawerParamList, 'Main'>;

export interface HomeViewModel {
  products: Product[];
  navigation: NavigationProp;
  insets: { top: number; bottom: number; left: number; right: number; };
}
