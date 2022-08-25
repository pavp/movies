import React from "react";
import { fireEvent, render } from "@testing-library/react-native";

import { Movie } from "_models/movie";

import MoviesHorizontalCarrousel from "./MoviesHorizontalCarrousel";
import { mockNavigate } from "_root/setup-tests";

describe("MoviesHorizontalCarrousel", () => {
  const movie: Movie = {
    id: 1234,
    title: "test",
    poster_path: "url",
  };
  const data: Movie[] = [movie];
  const title = "test";
  let isLoading = false;

  beforeEach(() => {
    isLoading = false;
  });

  it("should render carrousel with 1 element", () => {
    const { getAllByTestId } = render(
      <MoviesHorizontalCarrousel
        data={data}
        isLoading={isLoading}
        title={title}
      />
    );
    expect(getAllByTestId("data-list")).toHaveLength(1);
  });

  it("should render indicator when isLoading is true", () => {
    isLoading = true;
    const { getByTestId, rerender, queryByTestId } = render(
      <MoviesHorizontalCarrousel
        data={data}
        isLoading={isLoading}
        title={title}
      />
    );
    expect(getByTestId("indicator")).toBeTruthy();
    isLoading = false;
    rerender(
      <MoviesHorizontalCarrousel
        data={data}
        isLoading={isLoading}
        title={title}
      />
    );
    expect(queryByTestId("indicator")).toBeNull();
  });

  it("should call handle press item", () => {
    const { findAllByTestId, getAllByTestId } = render(
      <MoviesHorizontalCarrousel
        data={data}
        isLoading={isLoading}
        title={title}
      />
    );
    fireEvent.press(getAllByTestId("movie-onpress")[0]);
    expect(mockNavigate).toBeCalled();
  });
});
