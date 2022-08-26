import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { WebView } from "react-native-webview";

import { WebViewScreenRouteProp } from "_navigation/types";
import useCreateSession from "_hooks/useCreateSession/useCreateSession";
import { BASE_REQUEST_TOKEN_URL } from "_services/constants";

const RequestTokenWebView = () => {
  const { goBack } = useNavigation();
  const route = useRoute<WebViewScreenRouteProp>();
  const { token } = route.params;
  const { createSession } = useCreateSession(token);
  return (
    <WebView
      source={{
        uri: `${
          BASE_REQUEST_TOKEN_URL + token
        }?redirect_to=https://www.google.com`,
      }}
      onNavigationStateChange={(navState) => {
        const { url, canGoBack } = navState;
        if (url.includes("approved=true") && canGoBack) {
          goBack();
          createSession();
          return;
        }
        if (url.includes("denied=true") && canGoBack) goBack();
      }}
      testID="request-webview"
    />
  );
};
export default RequestTokenWebView;
