import React from "react";
import { renderHook } from "@testing-library/react-hooks";
import { waitFor } from "@testing-library/react-native";
import { QueryClient, QueryClientProvider } from "react-query";

import { RequestToken } from "_models/requestToken";
import { mockNavigate } from "_root/setup-tests";

import useRequestSession from "./useRequestSession";

const requestToken: RequestToken = {
  request_token: "1234",
  success: true,
};

jest.mock("_services/get-token", () => ({
  getToken: jest.fn().mockResolvedValue(requestToken),
}));

describe("useRequestSession", () => {
  it("should navigate to webview", async () => {
    const queryClient = new QueryClient();
    const wrapper = ({ children }: any) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
    const { result } = renderHook(() => useRequestSession(), { wrapper });
    await waitFor(() => result.current.requestSession());
    expect(mockNavigate).toBeCalledWith("WebView", {
      token: requestToken.request_token,
    });
  });
});
