import { useQuery } from "react-query";

import { GetMoviesType, MovieListAnswer } from "_models/general";
import { getMovies } from "_services/get-movies";

const useGetMovies = (type: GetMoviesType) =>
  useQuery<MovieListAnswer, Error>(type, () => getMovies(type));

export { useGetMovies };
