import React from "react";
import { Linking, ActivityIndicator } from "react-native";
import { useRoute } from "@react-navigation/native";

import { DetailsScreenRouteProp } from "_navigation/types";
import { WishListButton } from "_components/WishListButton";

import useGetMovieDetail from "../../hooks/useGetMovies";
import { FadedPoster } from "../../components/FadedPoster";
import {
  SafeAreaView,
  Container,
  Title,
  OverView,
  Description,
  DetailsContainer,
  HomePage,
  TitleContainer,
} from "./styles";

const DetailScreen = () => {
  const route = useRoute<DetailsScreenRouteProp>();
  const { id } = route.params;
  const { data, isLoading } = useGetMovieDetail(id);
  const {
    backdrop_path,
    poster_path,
    title,
    overview,
    release_date,
    genres,
    homepage,
  } = data ?? {};

  const getGenres = genres
    ? genres.length > 0 && (
        <Description>{genres.map((genre) => ` | ${genre.name}`)} </Description>
      )
    : null;

  return (
    <SafeAreaView edges={["bottom"]} testID="detail-container">
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          <FadedPoster url={poster_path ?? backdrop_path} />
          <Container testID="container">
            <TitleContainer>
              <Title>{title}</Title>
              <WishListButton handlePress={() => {}} />
            </TitleContainer>

            <DetailsContainer>
              <Description testID="release-date">
                {release_date ? new Date(release_date).getFullYear() : null}
                {getGenres}
              </Description>
            </DetailsContainer>
            {overview ? <OverView>{overview}</OverView> : null}
            {homepage ? (
              <HomePage
                onPress={() => Linking.openURL(homepage)}
                testID={"homepage-link"}
              >
                {homepage}
              </HomePage>
            ) : null}
          </Container>
        </>
      )}
    </SafeAreaView>
  );
};

export default DetailScreen;
