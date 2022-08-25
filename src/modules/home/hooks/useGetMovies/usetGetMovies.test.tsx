import { renderHook } from "@testing-library/react-hooks";
import { waitFor } from "@testing-library/react-native";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Movie } from "src/models/movie";

import { GetMoviesType } from "_models/general";
import { getMovies } from "_services/get-movies";

import useGetMovies from "./index";

const movie: Movie = {
  id: 1234,
  title: "test",
  poster_path: "url",
};

jest.mock("_services/get-movies", () => ({
  getMovies: jest.fn().mockResolvedValue([movie]),
}));

describe("useGetMovies", () => {
  it("should return data list", async () => {
    const queryClient = new QueryClient();
    const wrapper = ({ children }: any) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
    const { result } = renderHook(
      () => useGetMovies(GetMoviesType.GET_MOVIES_UPCOMING),
      { wrapper }
    );
    await waitFor(() => result.current.isSuccess);
    expect(result.current.data).toEqual([movie]);
  });
});
