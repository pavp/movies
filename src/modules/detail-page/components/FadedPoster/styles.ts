import styled from "styled-components";
import { View, Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height * 0.45;

const Container = styled(View)`
  height: ${windowHeight}px;
  width: 100%;
`;

export { Container };
