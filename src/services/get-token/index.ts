import apiClient from "_services/api-client";
import { API_REQUEST_TOKEN } from "../constants";

export const getToken = async () => {
  const { data } = await apiClient.get(API_REQUEST_TOKEN);
  return data;
};
