import styled from "styled-components";
import { Text, View } from "react-native";

import { COLOR } from "_commons/colors";

const Container = styled(View)`
  font-size: 18px;
  color: blue;
  font-weight: 500;
`;

const Title = styled(Text)`
  font-size: 16px;
  color: ${COLOR.white};
  font-weight: bold;
  margin: 16px;
`;

export { Container, Title };
