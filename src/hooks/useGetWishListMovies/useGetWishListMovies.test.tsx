import React from "react";
import { renderHook } from "@testing-library/react-hooks";
import { waitFor } from "@testing-library/react-native";
import { QueryClient, QueryClientProvider } from "react-query";

import { Movie } from "src/models/movie";

import useGetWishListMovies from "./index";

const movie: Movie = {
  id: 1234,
  title: "test",
  poster_path: "url",
};

jest.mock("_services/get-wishlist-movies", () => ({
  getWishListMovies: jest.fn().mockResolvedValue([movie]),
}));

describe("useGetWishListMovies", () => {
  it("should return data list", async () => {
    const queryClient = new QueryClient();
    const wrapper = ({ children }: any) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
    const { result } = renderHook(() => useGetWishListMovies(), { wrapper });
    await waitFor(() => result.current.isSuccess);
    expect(result.current.data).toEqual([movie]);
  });
});
