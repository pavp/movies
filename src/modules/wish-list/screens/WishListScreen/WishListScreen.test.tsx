import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { render } from "@testing-library/react-native";

import { Movie } from "_models/movie";

import WishListScreen from "./WishListScreen";

const movie: Movie = {
  id: 1234,
  title: "test",
  poster_path: "url",
};

jest.mock("_services/get-wishlist-movies", () => ({
  getWishListMovies: jest.fn().mockResolvedValue([movie]),
}));

describe("WishListScreen", () => {
  it("should render", async () => {
    const queryClient = new QueryClient();
    const wrapper = ({ children }: any) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
    const { findByTestId } = render(<WishListScreen />, { wrapper });
    expect(await findByTestId("container")).toBeTruthy();
  });
});
