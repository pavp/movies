import React from "react";
import { FlatList, View, Text, ActivityIndicator } from "react-native";

import { Movie } from "_models/movie";

import MovieItem from "../MovieItem/MovieItem";
import { Title } from "./styles";

interface IMoviesHorizontalCarrousel {
  title: string;
  data: Movie[] | undefined;
  isLoading: boolean;
}

const MoviesHorizontalCarrousel = ({
  data,
  title,
  isLoading,
}: IMoviesHorizontalCarrousel) => {
  const handlePressItem = (id: number) => {
    console.log("id", id);
  };

  const renderItem = ({ item }: { item: Movie }) => (
    <MovieItem item={item} handlePressMovie={handlePressItem} />
  );

  return (
    <View>
      <Title>{title}</Title>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

export default MoviesHorizontalCarrousel;
