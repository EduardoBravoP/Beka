import { DrawerNavigationProp } from "@react-navigation/drawer";
import { Product } from "../../types/Product";
import { DrawerParamList } from "../../@types/navigation";

export type NavigationProp = DrawerNavigationProp<DrawerParamList, 'Main'>;

export interface FavoritesViewModel {
  favorites: Product[];
  navigation: NavigationProp;
  insets: { top: number; bottom: number; left: number; right: number; };
}