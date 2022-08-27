import { Platform } from "react-native";
import { GetMoviesType } from "_models/general";

const iOS = Platform.OS === "ios";

export const FontFamilyByType = {
  [GetMoviesType.GET_MOVIES_POPULAR.toString()]: iOS
    ? "MarkerFelt-Thin"
    : "Roboto",
  [GetMoviesType.GET_MOVIES_TOP_RATED.toString()]: iOS ? "Arial" : "serif",
  [GetMoviesType.GET_MOVIES_UPCOMING.toString()]: iOS ? "Cochin" : "monospace",
};
