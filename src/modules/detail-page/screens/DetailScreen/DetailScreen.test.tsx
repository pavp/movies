import React from "react";
import { Linking } from "react-native";
import { QueryClient, QueryClientProvider } from "react-query";
import { fireEvent, render, waitFor } from "@testing-library/react-native";

import * as getMovieDetail from "_services/get-movie-detail";
import { Movie } from "_models/movie";

import DetailScreen from "./DetailScreen";

jest.mock("@react-navigation/native", () => ({
  useRoute: () => ({
    params: {
      id: 1234,
    },
  }),
}));

describe("DetailScreen", () => {
  const spyGetMovieDetail = jest.spyOn(getMovieDetail, "getMovieDetail");
  const date = new Date();
  let movie: Movie;

  beforeEach(() => {
    movie = {
      id: 1234,
      title: "test",
      poster_path: "poster",
      genres: [{ name: "test", id: 1 }],
      homepage: "test.com",
      overview: "overview test",
      release_date: date,
    };
  });

  it("should render with poster_path", async () => {
    spyGetMovieDetail.mockResolvedValueOnce(movie);
    const queryClient = new QueryClient();
    const wrapper = ({ children }: any) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
    const { getByTestId } = render(<DetailScreen />, { wrapper });
    await waitFor(() => {
      expect(getByTestId("detail-container")).toBeTruthy();
      const image = getByTestId("faded-poster-image");
      expect(image.props.source.uri).toContain(movie.poster_path);
    });
  });

  it("should call openUrl when tap on homepage link", async () => {
    const linkingMock = jest.fn();
    Linking.openURL = linkingMock;
    spyGetMovieDetail.mockResolvedValueOnce(movie);
    const queryClient = new QueryClient();
    const wrapper = ({ children }: any) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
    const { findByTestId } = render(<DetailScreen />, { wrapper });
    fireEvent.press(await findByTestId("homepage-link"));
    expect(linkingMock).toBeCalled();
  });

  it("should render with backdrop_path and undefined values", async () => {
    movie.backdrop_path = "backdrop";
    movie.poster_path = undefined;
    movie.genres = undefined;
    movie.homepage = undefined;
    movie.overview = undefined;
    movie.release_date = undefined;

    spyGetMovieDetail.mockResolvedValueOnce(movie);
    const queryClient = new QueryClient();
    const wrapper = ({ children }: any) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
    const { findByTestId, getByTestId } = render(<DetailScreen />, { wrapper });
    const image = await findByTestId("faded-poster-image");
    expect(image.props.source.uri).toContain(movie.backdrop_path);
  });
});
