import { SimpleGrid, Spinner } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";

const MovieGrid = () => {
  const { data, isLoading, error } = useMovies();

  if (isLoading) return <Spinner />;
  if (error) return null;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding={2}
      spacing={8}
    >
      {data?.results.map((m) => (
        <MovieCard key={m.id} movie={m} />
      ))}
    </SimpleGrid>
  );
};

export default MovieGrid;
