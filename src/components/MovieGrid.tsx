import { HStack, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import MovieCardSkeleton from "./MovieCardSkeleton";
import getMovies from "../services/movie-service";
import InfiniteScroll from "react-infinite-scroll-component";
import React from "react";

const MovieGrid = () => {
  const discoverEndpoint = getMovies("discover");
  const { data, isLoading, error, fetchNextPage, hasNextPage } =
    useMovies(discoverEndpoint);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return null;

  const fetchedMoviesCount =
    data?.pages.reduce((a, c) => a + c.results.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchedMoviesCount}
      next={() => fetchNextPage()}
      hasMore={!!hasNextPage}
      loader={<Spinner />}
      endMessage={<Text align="center"> All movies loaded.</Text>}
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={2}
        spacing={8}
      >
        {isLoading &&
          skeletons.map((skel) => (
            <HStack spacing={2} key={skel}>
              <MovieCardSkeleton />
            </HStack>
          ))}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default MovieGrid;
