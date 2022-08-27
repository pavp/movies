import apiClient from "_services/api-client";

import { API_GET_DETAIL } from "../constants";

export const getMovieDetail = async (id: number | string) => {
  const { data } = await apiClient.get(`${API_GET_DETAIL}${id}`);
  return data;
};
