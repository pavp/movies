import React from "react";

import { MoviesHorizontalCarrousel } from "_components/MoviesHorizontalCarrousel";
import { GetMoviesType } from "_models/general";
import useGetMovies from "_modules/home/hooks/useGetMovies";

import { SafeAreaView, Container } from "./styles";

const Home = () => {
  const { data: upcomingMovies, isLoading: isLoadingUpComingMovies } =
    useGetMovies(GetMoviesType.GET_MOVIES_UPCOMING);

  const { data: popularMovies, isLoading: isLoadingPopularMovies } =
    useGetMovies(GetMoviesType.GET_MOVIES_POPULAR);

  const { data: topRatedMovies, isLoading: isLoadingRatedMovies } =
    useGetMovies(GetMoviesType.GET_MOVIES_TOP_RATED);

  return (
    <Container testID="container">
      <SafeAreaView edges={["bottom"]}>
        <MoviesHorizontalCarrousel
          data={upcomingMovies?.results}
          title={"Upcoming Movies"}
          isLoading={isLoadingUpComingMovies}
          type={GetMoviesType.GET_MOVIES_UPCOMING}
        />
        <MoviesHorizontalCarrousel
          data={popularMovies?.results}
          title={"Popular Movies"}
          isLoading={isLoadingPopularMovies}
          type={GetMoviesType.GET_MOVIES_POPULAR}
        />
        <MoviesHorizontalCarrousel
          data={topRatedMovies?.results}
          title={"Top Rated Movies"}
          isLoading={isLoadingRatedMovies}
          type={GetMoviesType.GET_MOVIES_TOP_RATED}
        />
      </SafeAreaView>
    </Container>
  );
};

export default Home;
