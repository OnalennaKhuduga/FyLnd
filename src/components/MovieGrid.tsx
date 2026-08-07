import { HStack, SimpleGrid } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import MovieCardSkeleton from "./MovieCardSkeleton";

const MovieGrid = () => {
  const { data, isLoading, error } = useMovies();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return null;

  return (
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
      {data?.results.map((m) => (
        <MovieCard key={m.id} movie={m} />
      ))}
    </SimpleGrid>
  );
};

export default MovieGrid;
