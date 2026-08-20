import { Spinner, VStack } from "@chakra-ui/react";
import React from "react";
import MovieSearchCard from "../components/MovieSearchCard";
import useMovies from "../hooks/useMovies";
import getMovieEndpoint from "../services/movie-service";
import useMovieQueryStore from "../useMovieQueryStore";

const SearchPage = () => {
  const popular = getMovieEndpoint("popular");
  const movieQuery = useMovieQueryStore((s) => s.movieQuery);
  const selectedEndpoint = movieQuery.searchText ? "/search/movie" : popular;

  const { data, error, isLoading } = useMovies(selectedEndpoint);

  if (isLoading) return <Spinner />;
  if (error) return null;

  return (
    <VStack w="100%" spacing={{ base: 10, md: 5 }} padding={{ base: 5, md: 0 }}>
      {data?.pages.map((p, index) => (
        <React.Fragment key={index}>
          {p.results.map((m) => (
            <MovieSearchCard key={m.id} movie={m} />
          ))}
        </React.Fragment>
      ))}
    </VStack>
  );
};

export default SearchPage;
