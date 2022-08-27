import { useContext } from "react";
import { useQuery } from "react-query";

import { SessionContext } from "_context/SessionContext";
import { MovieListResponse } from "_models/general";
import { getWishListMovies } from "_services/get-wishlist-movies";

const useGetWishListMovies = () => {
  const { session } = useContext(SessionContext);
  return useQuery<MovieListResponse, Error>("wishlist-movies", () =>
    getWishListMovies(session)
  );
};

export { useGetWishListMovies };
