import styled from "styled-components";
import { Text as DefaultText } from "react-native";
import { SafeAreaView as SafeArea } from "react-native-safe-area-context";

const Text = styled(DefaultText)`
  font-size: 18px;
  color: blue;
  font-weight: 500;
`;

const SafeAreaView = styled(SafeArea)`
  flex: 1;
  background-olor: #191b1e;
`;

export { Text, SafeAreaView };
