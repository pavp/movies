import React from "react";
import { render } from "@testing-library/react-native";

import MainScreen from "./MainScreen";
import { QueryClient, QueryClientProvider } from "react-query";

describe("MainScreen", () => {
  it("should render", async () => {
    const queryClient = new QueryClient();
    const wrapper = ({ children }: any) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
    const { getByTestId } = render(<MainScreen />, { wrapper });
    expect(getByTestId("container")).toBeTruthy();
  });
});
