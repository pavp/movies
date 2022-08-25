import React from "react";
import { StatusBar } from "react-native";

import { SafeAreaView, Text } from "./styles";

const Home = () => {
  return (
    <SafeAreaView>
      <StatusBar
        barStyle={"light-content"}
        translucent
        backgroundColor="transparent"
      />
      <Text>HOLA</Text>
    </SafeAreaView>
  );
};

export default Home;
