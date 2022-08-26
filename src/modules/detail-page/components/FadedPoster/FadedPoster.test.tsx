import React from "react";
import { render } from "@testing-library/react-native";

import FadedPoster from "./FadedPoster";

describe("FadedPoster", () => {
  it("should render", () => {
    const { getByTestId } = render(<FadedPoster url={"test"} />);
    expect(getByTestId("faded-poster")).toBeTruthy();
  });
});
