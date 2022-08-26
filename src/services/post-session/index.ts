import apiClient from "_services/api-client";
import { CREATE_SESSION } from "../constants";

export const postSession = async (requestToken: string) => {
  const { data } = await apiClient.post(CREATE_SESSION, {
    request_token: requestToken,
  });
  return data;
};
