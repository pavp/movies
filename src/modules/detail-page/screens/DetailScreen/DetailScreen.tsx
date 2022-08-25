import React from "react";

import { SafeAreaView, Container } from "./styles";

const DetailScreen = () => {
  return (
    <Container testID="container">
      <SafeAreaView edges={["bottom"]}></SafeAreaView>
    </Container>
  );
};

export default DetailScreen;
