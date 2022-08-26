import { RouteProp } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";

export type HomeStackNavigatorParamList = {
  Home: undefined;
  Detail: {
    id: number;
  };
  WebView: {
    token: string;
  };
};

export type HomeScreenNavigationProp = StackScreenProps<
  HomeStackNavigatorParamList,
  "Detail",
  "Webview"
>;

export type DetailsScreenRouteProp = RouteProp<
  HomeStackNavigatorParamList,
  "Detail"
>;

export type WebViewScreenRouteProp = RouteProp<
  HomeStackNavigatorParamList,
  "WebView"
>;
