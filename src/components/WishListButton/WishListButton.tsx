import React from "react";
import { Image, TouchableOpacity } from "react-native";

import { COLOR } from "_commons/colors";

interface IWishListButton {
  handlePress: () => void;
}

const WishListButton = ({ handlePress }: IWishListButton) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Image
        source={require("_commons/images/wishlist.png")}
        style={{ height: 20, width: 20, tintColor: COLOR.white }}
        resizeMode={"cover"}
      />
    </TouchableOpacity>
  );
};

export default WishListButton;
