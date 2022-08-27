import styled from "styled-components";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView as SafeArea } from "react-native-safe-area-context";

import { COLOR } from "_commons/colors";
import { FontFamilyByType } from "_utils/GetFontFamilyByType";
import { ColorByType } from "_utils/GetColorByType";

import { ITextProps } from "./types";

const SafeAreaView = styled(SafeArea)`
  background-color: ${COLOR.darkGray};
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Container = styled(ScrollView)`
  background-color: ${COLOR.darkGray};
  flex: 1;
`;

const Title = styled(Text)<ITextProps>`
  font-family: ${({ type }) => FontFamilyByType[type]};
  font-size: 16px;
  color: ${({ type }) => ColorByType[type]};
  font-weight: bold;
  flex: 1;
  margin-right: 16px;
`;

const OverView = styled(Text)<ITextProps>`
  font-family: ${({ type }) => FontFamilyByType[type]};
  font-size: 14px;
  color: ${COLOR.lightGray};
  margin: 16px;
  text-align: center;
`;

const Description = styled(Text)<ITextProps>`
  font-family: ${({ type }) => FontFamilyByType[type]};
  font-size: 14px;
  color: ${COLOR.gray};
  flex-shrink: 1;
`;

const DetailsContainer = styled(View)`
  flex-direction: row;
  margin: 16px;
`;

const HomePage = styled(Text)<ITextProps>`
  font-family: ${({ type }) => FontFamilyByType[type]};
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
