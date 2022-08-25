import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { MainScreen } from "_modules/home/screens/MainScreen";
import { DetailScreen } from "_modules/detail-page/screens/DetailScreen";
import { COLOR } from "_commons/colors";

const { Screen, Navigator } = createStackNavigator();

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
        }}
      />
      <Screen
        name="Detail"
        component={DetailScreen}
        options={{
          title: "Detail",
          headerStyle: {
            backgroundColor: COLOR.darkGray,
          },
          headerTitleStyle: {
            color: COLOR.white,
          },
          headerBackTitleVisible: false,
        }}
      />
    </Navigator>
  );
};

export default MainNavigator;
