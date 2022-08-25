import React from "react";
import { Dimensions, TouchableOpacity, View } from "react-native";

import { Movie } from "_models/movie";

import { Poster } from "./styles";

const windowHeight = Dimensions.get("window").height / 4;

interface IMovieItem {
  item: Movie;
  handlePressMovie: (id: number) => void;
}

const MovieItem = ({ item, handlePressMovie }: IMovieItem) => {
  if (item?.poster_path || item?.backdrop_path)
    return (
      <TouchableOpacity onPress={() => handlePressMovie(item.id)}>
        <Poster
          source={{
            uri: `https://image.tmdb.org/t/p/original${
              item.poster_path ?? item.backdrop_path
            }`,
          }}
          style={{ height: windowHeight, aspectRatio: 2 / 3 }}
          resizeMode={"cover"}
        />
      </TouchableOpacity>
    );

  return <View />;
};

export default MovieItem;
