import styled from "styled-components";
import { SafeAreaView as SafeArea } from "react-native-safe-area-context";

import { COLOR } from "_commons/colors";
import { Dimensions, View } from "react-native";

const windowWidth = Dimensions.get("window").width / 2 - 16;

const SafeAreaView = styled(SafeArea)`
  background-color: ${COLOR.darkGray};
  flex: 1;
`;
const EmptyView = styled(View)`
  width: ${windowWidth}px;
`;

export { SafeAreaView, EmptyView };
