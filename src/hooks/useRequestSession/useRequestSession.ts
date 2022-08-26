import { useEffect } from "react";
import { useQuery } from "react-query";
import { useNavigation } from "@react-navigation/native";

import { getToken } from "_services/get-token";
import { RequestToken } from "_models/requestToken";

const useRequestToken = () =>
  useQuery<RequestToken, Error>("request-token", () => getToken(), {
    enabled: false,
  });

const useRequestSession = () => {
  const { navigate } = useNavigation();
  const { data, refetch: requestSession, isLoading } = useRequestToken();

  useEffect(() => {
    if (data?.success && data?.request_token) {
      navigate("WebView", {
        token: data.request_token,
      });
    }
  }, [data]);

  return { requestSession, isLoading };
};

export default useRequestSession;
