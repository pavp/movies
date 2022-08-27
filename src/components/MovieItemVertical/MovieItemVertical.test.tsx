import React from "react";
import { fireEvent, render } from "@testing-library/react-native";

import { Movie } from "_models/movie";

import MovieItemVertical from "./MovieItemVertical";

describe("MovieItemVertical", () => {
  let movie: Movie;
  const clickFn = jest.fn();

  beforeEach(() => {
    movie = {
      id: 1234,
      title: "test",
      poster_path: "url",
    };
  });

  it("should call handlePressMovie props", async () => {
    const { getByTestId } = render(
      <MovieItemVertical handlePressMovie={clickFn} item={movie} />
    );
    fireEvent.press(getByTestId("movie-onpress"));
    expect(clickFn).toHaveBeenCalled();
  });

  it("should render when poster_path is null", async () => {
    movie.poster_path = undefined;
    movie.backdrop_path = "url";
    const { findByTestId } = render(
      <MovieItemVertical handlePressMovie={clickFn} item={movie} />
    );
    expect(findByTestId("movie-onpress")).toBeTruthy();
  });

  it("should render empty view when poster_path and backdrop_path are null", async () => {
    movie.backdrop_path = undefined;
    movie.poster_path = undefined;
    const { findByTestId } = render(
      <MovieItemVertical handlePressMovie={clickFn} item={movie} />
    );
    expect(findByTestId("empty-view")).toBeTruthy();
  });
});
