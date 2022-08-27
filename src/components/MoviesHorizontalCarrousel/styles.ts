import styled from "styled-components";
import { Text } from "react-native";

import { COLOR } from "_commons/colors";

const Title = styled(Text)`
  font-size: 16px;
  color: ${COLOR.white};
  font-weight: bold;
  margin: 16px;
`;

export { Title };
