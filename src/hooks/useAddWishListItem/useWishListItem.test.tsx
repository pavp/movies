import React from "react";
import { Alert } from "react-native";
import { renderHook } from "@testing-library/react-hooks";
import { waitFor } from "@testing-library/react-native";
import { QueryClient, QueryClientProvider } from "react-query";

import { SessionContext } from "_context/SessionContext";
import { AddWishListItemResponse } from "_models/addWatchListItemResponse";

import useWatchListItem from "./useWishListItem";

const response: AddWishListItemResponse = {
  status_code: 1,
  status_message: "ok",
};

jest.mock("_services/post-wishlist-item", () => ({
  postWishListItem: jest.fn().mockResolvedValue(response),
}));

describe("useWatchListItem", () => {
  it("should add new item", async () => {
    const alertMock = jest.fn();
    const mediaId = 1;
    const setSessionMock = jest.fn();
    Alert.alert = alertMock;
    const queryClient = new QueryClient();
    const wrapper = ({ children }: any) => (
      <QueryClientProvider client={queryClient}>
        <SessionContext.Provider
          value={{ session: "sessionTest", setSession: setSessionMock }}
        >
          {children}
        </SessionContext.Provider>
      </QueryClientProvider>
    );
    const { result } = renderHook(() => useWatchListItem(mediaId), {
      wrapper,
    });
    await waitFor(() => result.current.addWishListItem());
    expect(alertMock).toBeCalled();
  });
});
