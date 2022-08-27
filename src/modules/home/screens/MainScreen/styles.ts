import styled from "styled-components";
import { ScrollView } from "react-native";
import { SafeAreaView as SafeArea } from "react-native-safe-area-context";

import { COLOR } from "_commons/colors";

const SafeAreaView = styled(SafeArea)`
  background-color: ${COLOR.darkGray};
  flex: 1;
`;

const Container = styled(ScrollView)`
  background-color: ${COLOR.darkGray};
  flex: 1;
`;

export { SafeAreaView, Container };
