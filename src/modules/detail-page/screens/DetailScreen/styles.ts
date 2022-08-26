import styled from "styled-components";
import { ScrollView, Text, View } from "react-native";
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

const Title = styled(Text)`
  font-size: 16px;
  color: ${COLOR.white};
  font-weight: bold;
  flex: 1;
  margin-right: 16px;
`;

const OverView = styled(Text)`
  font-size: 14px;
  color: ${COLOR.lightGray};
  margin: 16px;
  text-align: center;
`;

const Description = styled(Text)`
  font-size: 14px;
  color: ${COLOR.gray};
  flex-shrink: 1;
`;

const DetailsContainer = styled(View)`
  flex-direction: row;
  margin: 16px;
`;

const HomePage = styled(Text)`
  font-size: 12px;
  color: ${COLOR.blue};
  margin: 16px;
  align-self: center;
  text-align: center;
`;

const TitleContainer = styled(View)`
  flex-direction: row;
  margin: 16px;
  justify-content: center;
  align-items: flex-start;
`;

export {
  SafeAreaView,
  Container,
  Title,
  Description,
  OverView,
  DetailsContainer,
  HomePage,
  TitleContainer,
};
