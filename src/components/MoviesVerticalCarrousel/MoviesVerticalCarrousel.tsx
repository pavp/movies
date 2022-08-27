import React, { useCallback } from "react";
import { FlatList, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import uuid from "react-native-uuid";

import { Movie } from "_models/movie";

import { MovieItemVertical } from "../MovieItemVertical";
import { EmptyView } from "./styles";
import { GetMoviesType } from "_models/general";

interface IMoviesVerticalCarrousel {
  data: Movie[] | undefined;
  isLoading: boolean;
}

const MoviesVerticalCarrousel = ({
  data,
  isLoading,
}: IMoviesVerticalCarrousel) => {
  const { navigate } = useNavigation();

  const handlePressItem = useCallback((id: number | string) => {
    navigate("Detail", { id, type: GetMoviesType.GET_MOVIES_POPULAR });
  }, []);

  const renderItem = ({ item, index }: { item: Movie; index: number }) => {
    if (index === data!.length - 1) return <EmptyView />;
    return <MovieItemVertical item={item} handlePressMovie={handlePressItem} />;
  };

  const createRows = (data: Movie[], columns: number) => {
    if (data) {
      const rows = Math.floor(data?.length / columns);
      let lastRowElements = data.length - rows * columns;
      while (lastRowElements !== columns) {
        data.push({
          id: uuid.v4().toString(),
          title: "",
        });
        lastRowElements += 1;
      }
      return data;
    }
  };

  return (
    <>
      {isLoading ? (
        <ActivityIndicator testID={"indicator"} />
      ) : (
        <FlatList
          data={createRows(data!, 2)}
          renderItem={renderItem}
          numColumns={2}
          columnWrapperStyle={{
            flex: 1,
            justifyContent: "space-around",
            marginBottom: 8,
            marginHorizontal: 8,
          }}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          testID={"data-list"}
        />
      )}
    </>
  );
};

export default MoviesVerticalCarrousel;
