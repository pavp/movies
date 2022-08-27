import { useContext } from "react";
import { useMutation, useQueryClient } from "react-query";
import { Alert } from "react-native";

import { postWishListItem } from "_services/post-wishlist-item";
import { AddWishListItemResponse } from "_models/addWatchListItemResponse";
import { SessionContext } from "_context/SessionContext";

const useWishListItem = (mediaId: number | string) => {
  const { session } = useContext(SessionContext);
  const queryClient = useQueryClient();

  const handleOpenErrorAlert = () => {
    Alert.alert(
      "You have to authenticate before addding a movie to wish list",
      "",
      [
        {
          text: "Ok",
          onPress: () => {
            queryClient.refetchQueries("request-token");
          },
        },
      ]
    );
  };

  const { mutate: addWishListItem } = useMutation<
    AddWishListItemResponse,
    Error
  >(() => postWishListItem(mediaId, session), {
    onSuccess: (data) => {
      Alert.alert(data.status_message);
    },
    onError: () => {
      handleOpenErrorAlert();
    },
  });

  return { addWishListItem };
};

export default useWishListItem;
