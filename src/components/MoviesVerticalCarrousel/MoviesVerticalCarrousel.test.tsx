import React from "react";
import { fireEvent, render } from "@testing-library/react-native";

import { Movie } from "_models/movie";
import { mockNavigate } from "_root/setup-tests";

import MoviesVerticalCarrousel from "./MoviesVerticalCarrousel";

describe("MoviesVerticalCarrousel", () => {
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
      <MoviesVerticalCarrousel data={data} isLoading={isLoading} />
    );
    expect(getAllByTestId("data-list")).toHaveLength(1);
  });

  it("should render indicator when isLoading is true", () => {
    isLoading = true;
    const { getByTestId, rerender, queryByTestId } = render(
      <MoviesVerticalCarrousel data={data} isLoading={isLoading} />
    );
    expect(getByTestId("indicator")).toBeTruthy();
    isLoading = false;
    rerender(<MoviesVerticalCarrousel data={data} isLoading={isLoading} />);
    expect(queryByTestId("indicator")).toBeNull();
  });

  it("should call handle press item", () => {
    const { getAllByTestId } = render(
      <MoviesVerticalCarrousel data={data} isLoading={isLoading} />
    );
    fireEvent.press(getAllByTestId("movie-onpress")[0]);
    expect(mockNavigate).toBeCalled();
  });
});
