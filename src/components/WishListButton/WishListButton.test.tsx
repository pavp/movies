import React from "react";
import { fireEvent, render } from "@testing-library/react-native";

import WishListButton from "./WishListButton";

describe("WishListButton", () => {
  const clickFn = jest.fn();

  it("should call handlePressMovie props", async () => {
    const { getByTestId } = render(<WishListButton handlePress={clickFn} />);
    fireEvent.press(getByTestId("wish-onpress"));
    expect(clickFn).toHaveBeenCalled();
  });
});
