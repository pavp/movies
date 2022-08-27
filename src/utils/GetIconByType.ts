import { GetMoviesType } from "_models/general";

export const IconByType = {
  [GetMoviesType.GET_MOVIES_POPULAR.toString()]: require(`_commons/images/wishlist1.png`),
  [GetMoviesType.GET_MOVIES_TOP_RATED.toString()]: require(`_commons/images/wishlist2.png`),
  [GetMoviesType.GET_MOVIES_UPCOMING.toString()]: require(`_commons/images/wishlist3.png`),
};
