import React from "react";
import { Alert } from "react-native";
import { renderHook } from "@testing-library/react-hooks";
import { waitFor } from "@testing-library/react-native";
import { QueryClient, QueryClientProvider, setLogger } from "react-query";

import { SessionContext } from "_context/SessionContext";
import { AddWishListItemResponse } from "_models/addWatchListItemResponse";
import * as postWishListItem from "_services/post-wishlist-item";

import useWatchListItem from "./useWishListItem";

const response: AddWishListItemResponse = {
  status_code: 1,
  status_message: "ok",
};

describe("useWatchListItem", () => {
  const spyPostWishListItem = jest.spyOn(postWishListItem, "postWishListItem");
  const spyAlert = jest.spyOn(Alert, "alert");
  const setSessionMock = jest.fn();
  const mediaId = 1;

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

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should add new item", async () => {
    spyPostWishListItem.mockResolvedValueOnce(response);
    const { result } = renderHook(() => useWatchListItem(mediaId), {
      wrapper,
    });
    await waitFor(() => result.current.addWishListItem());
    expect(spyAlert).toBeCalled();
  });

  it("should request session when dispatch an error ", async () => {
    const queryMock = jest.fn();
    spyPostWishListItem.mockRejectedValueOnce({
      status_code: 3,
      status_message:
        "Authentication failed: You do not have permissions to access the service.",
    });
    queryClient.refetchQueries = queryMock;
    const { result } = renderHook(() => useWatchListItem(mediaId), {
      wrapper,
    });
    await waitFor(() => result.current.addWishListItem());
    expect(spyAlert).toBeCalled();
    // @ts-ignore
    await Alert.alert.mock.calls[0][2][0].onPress();
    expect(queryMock).toBeCalled();
  });
});
