import React from "react";
import { Image, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";

import { COLOR } from "_commons/colors";
import { Container } from "./styles";

interface IFadedPoster {
  url: string | undefined;
}

const FadedPoster = ({ url }: IFadedPoster) => {
  return (
    <Container testID="faded-poster">
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/original${url}`,
        }}
        style={{ height: "100%", width: "100%" }}
        resizeMode={"cover"}
        testID={"faded-poster-image"}
      />
      <LinearGradient
        colors={["transparent", COLOR.darkGray]}
        style={StyleSheet.absoluteFill}
      />
    </Container>
  );
};

export default FadedPoster;
