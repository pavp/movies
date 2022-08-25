import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";

import { MainNavigator } from "_navigation/MainNavigator";

const queryClient = new QueryClient();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <MainNavigator />
        </QueryClientProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
