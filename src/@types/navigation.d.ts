import { NavigatorScreenParams } from '@react-navigation/native';

export type HomeStackParamList = {
  HomeScreen: undefined;
  ProductDetails: { productId: string };
};

export type TabParamList = {
  Home: NavigatorScreenParams<HomeStackParamList>;
  Cart: undefined;
  Favorites: undefined;
};

export type DrawerParamList = {
  Main: NavigatorScreenParams<TabParamList>;
  Orders: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends DrawerParamList {}
  }
}