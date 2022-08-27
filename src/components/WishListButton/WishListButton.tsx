import React from "react";
import { Image, TouchableOpacity } from "react-native";

import { GetMoviesType } from "_models/general";
import { COLOR } from "_commons/colors";
import { IconByType } from "_utils/GetIconByType";

interface IWishListButton {
  handlePress: () => void;
  type?: GetMoviesType;
}

const WishListButton = ({
  handlePress,
  type = GetMoviesType.GET_MOVIES_TOP_RATED,
}: IWishListButton) => {
  return (
    <TouchableOpacity onPress={handlePress} testID="wish-onpress">
      <Image
        source={IconByType[type]}
        style={{ height: 20, width: 20, tintColor: COLOR.white }}
        resizeMode={"cover"}
      />
    </TouchableOpacity>
  );
};

export default WishListButton;
