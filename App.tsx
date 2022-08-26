import React, { useContext } from "react";
import { StatusBar } from "react-native";
import { QueryClient, QueryClientProvider } from "react-query";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";

import { MainNavigator } from "_navigation/MainNavigator";
import { HomeStackNavigatorParamList } from "_navigation/types";
import SessionGlobalState from "_context/SessionContext/SessionGlobalState";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends HomeStackNavigatorParamList {}
  }
}

const queryClient = new QueryClient();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <SessionGlobalState>
            <StatusBar
              barStyle={"light-content"}
              translucent
              backgroundColor="transparent"
            />
            <MainNavigator />
          </SessionGlobalState>
        </QueryClientProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
