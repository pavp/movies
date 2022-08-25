import { GetMoviesType } from "_models/general";
import apiClient from "_services/api-client";

export const getMovies = async (type: GetMoviesType) => {
  const { data } = await apiClient.get(type);
  return data;
};
