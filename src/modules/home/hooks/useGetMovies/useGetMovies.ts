import { useQuery } from "react-query";

import { GetMoviesType, MovieListResponse } from "_models/general";
import { getMovies } from "_services/get-movies";

const useGetMovies = (type: GetMoviesType) =>
  useQuery<MovieListResponse, Error>(type, () => getMovies(type));

export { useGetMovies };
