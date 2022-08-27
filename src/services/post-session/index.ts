import apiClient from "_services/api-client";
import { API_CREATE_SESSION } from "../constants";

export const postSession = async (requestToken: string) => {
  const { data } = await apiClient.post(API_CREATE_SESSION, {
    request_token: requestToken,
  });
  return data;
};
