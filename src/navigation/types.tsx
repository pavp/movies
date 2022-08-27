import { RouteProp } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";

import { GetMoviesType } from "_models/general";

export type HomeStackNavigatorParamList = {
  Home: undefined;
  Detail: {
    id: number | string;
    type: GetMoviesType;
  };
  WebView: {
    token: string;
  };
  WishList: undefined;
};

export type HomeScreenNavigationProp = StackScreenProps<
  HomeStackNavigatorParamList,
  "Detail"
>;

export type DetailsScreenRouteProp = RouteProp<
  HomeStackNavigatorParamList,
  "Detail"
>;

export type WebViewScreenRouteProp = RouteProp<
  HomeStackNavigatorParamList,
  "WebView"
>;
