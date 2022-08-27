import { GetMoviesType } from "_models/general";

export const ColorByType = {
  [GetMoviesType.GET_MOVIES_POPULAR.toString()]: "pink",
  [GetMoviesType.GET_MOVIES_TOP_RATED.toString()]: "lightblue",
  [GetMoviesType.GET_MOVIES_UPCOMING.toString()]: "yellow",
};
