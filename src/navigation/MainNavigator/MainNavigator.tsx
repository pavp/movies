import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { MainScreen } from "_modules/home/screens/MainScreen";
import { DetailScreen } from "_modules/detail-page/screens/DetailScreen";
import { COLOR } from "_commons/colors";
import { WishListButton } from "_components/WishListButton";
import { RequestTokenWebView } from "_components/RequestTokenWebView";

import { HomeStackNavigatorParamList } from "../types";
import { RightButtonContainer } from "./styles";

const { Screen, Navigator } =
  createStackNavigator<HomeStackNavigatorParamList>();

const MainNavigator = () => {
  return (
    <Navigator>
      <Screen
        name="Home"
        component={MainScreen}
        options={{
          title: "Movies",
          headerStyle: {
            backgroundColor: COLOR.darkGray,
          },
          headerTitleStyle: {
            color: COLOR.white,
          },
          headerRight: () => (
            <RightButtonContainer>
              <WishListButton handlePress={() => {}} />
            </RightButtonContainer>
          ),
        }}
      />
      <Screen
        name="Detail"
        component={DetailScreen}
        options={{
          title: "",
          headerTitleStyle: {
            color: COLOR.white,
          },
          headerBackTitleVisible: false,
          headerTransparent: true,
          headerTintColor: COLOR.white,
        }}
      />
      <Screen
        name="WebView"
        component={RequestTokenWebView}
        options={{
          title: "Webview",
          headerBackTitleVisible: false,
        }}
      />
    </Navigator>
  );
};

export default MainNavigator;
