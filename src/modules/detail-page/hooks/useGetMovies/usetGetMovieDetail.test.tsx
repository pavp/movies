import React from "react";
import { renderHook } from "@testing-library/react-hooks";
import { waitFor } from "@testing-library/react-native";
import { QueryClient, QueryClientProvider } from "react-query";

import { Movie } from "src/models/movie";

import useGetMovieDetail from "./index";

const movie: Movie = {
  id: 1234,
  title: "test",
  poster_path: "url",
};

jest.mock("_services/get-movie-detail", () => ({
  getMovieDetail: jest.fn().mockResolvedValue(movie),
}));

describe("useGetMovieDetail", () => {
  it("should return movie detail", async () => {
    const queryClient = new QueryClient();
    const wrapper = ({ children }: any) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
    const { result } = renderHook(() => useGetMovieDetail(movie.id), {
      wrapper,
    });
    await waitFor(() => result.current.isSuccess);
    expect(result.current.data).toEqual(movie);
  });
});
