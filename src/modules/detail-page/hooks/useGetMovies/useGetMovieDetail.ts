import { useQuery } from "react-query";

import { getMovieDetail } from "_services/get-movie-detail";
import { Movie } from "_models/movie";

const useGetMovieDetail = (id: number) =>
  useQuery<Movie, Error>("movie-detail", () => getMovieDetail(id));

export { useGetMovieDetail };
