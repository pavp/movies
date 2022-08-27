import React from "react";

import { MoviesVerticalCarrousel } from "_components/MoviesVerticalCarrousel";
import { useGetWishListMovies } from "_hooks/useGetWishListMovies/useGetWishListMovies";

import { SafeAreaView } from "./styles";

const WishListScreen = () => {
  const { data, isLoading } = useGetWishListMovies();

  return (
    <SafeAreaView testID="container">
      <MoviesVerticalCarrousel data={data?.results} isLoading={isLoading} />
    </SafeAreaView>
  );
};

export default WishListScreen;
