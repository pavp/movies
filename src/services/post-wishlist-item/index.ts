import apiClient from "_services/api-client";
import { API_WISHLIST_ITEM } from "../constants";

export const postWishListItem = async (
  mediaId: number | string,
  session: string
) => {
  const media = {
    media_type: "movie",
    media_id: mediaId,
    watchlist: true,
  };
  const { data } = await apiClient.post(API_WISHLIST_ITEM(), media, {
    params: { session_id: session },
  });
  return data;
};
