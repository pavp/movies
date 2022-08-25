import React, { useCallback } from "react";
import { FlatList, View, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";

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
  const { navigate } = useNavigation();

  const handlePressItem = useCallback((id: number) => {
    navigate("Detail", { id });
  }, []);

  const renderItem = ({ item }: { item: Movie }) => (
    <MovieItem item={item} handlePressMovie={handlePressItem} />
  );

  return (
    <View>
      <Title>{title}</Title>
      {isLoading ? (
        <ActivityIndicator testID={"indicator"} />
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          testID={"data-list"}
        />
      )}
    </View>
  );
};

export default MoviesHorizontalCarrousel;
