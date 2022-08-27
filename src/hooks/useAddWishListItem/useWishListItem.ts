import { useContext } from "react";
import { useMutation } from "react-query";
import { Alert } from "react-native";

import { postWishListItem } from "_services/post-wishlist-item";
import { AddWishListItemResponse } from "_models/addWatchListItemResponse";
import { SessionContext } from "_context/SessionContext";

const useWishListItem = (mediaId: number | string) => {
  const { session } = useContext(SessionContext);
  const { mutate: addWishListItem } = useMutation<
    AddWishListItemResponse,
    Error
  >(() => postWishListItem(mediaId, session), {
    onSuccess: (data) => {
      Alert.alert(data.status_message);
    },
  });

  return { addWishListItem };
};

export default useWishListItem;
