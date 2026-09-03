import {
  Center,
  Grid,
  GridItem,
  Heading,
  Show,
  Spinner,
  VStack,
} from "@chakra-ui/react";
import MovieGridCard from "../components/MovieGridCard";
import MovieSearchCard from "../components/MovieSearchCard";
import useMovies from "../hooks/useMovies";
import getMovieEndpoint from "../services/movie-service";
import useMovieQueryStore from "../stores/useMovieQueryStore";

const SearchPage = () => {
  const popular = getMovieEndpoint("popular");
  const searchText = useMovieQueryStore((s) => s.movieQuery.searchText);
  const selectedEndpoint = searchText ? "/search/movie" : popular;

  const displayedMovies = searchText
    ? `Showing results for '${searchText}':`
    : "Popular Movies:";

  const { data, error, isLoading } = useMovies(selectedEndpoint);

  if (isLoading)
    return (
      <Center h="100%">
        <Spinner />
      </Center>
    );
  if (error) return null;

  return (
    <VStack
      w="100%"
      spacing={{ base: 10, md: 5 }}
      padding={{ base: 5, md: 3, lg: 0 }}
      align="left"
    >
      <Heading fontSize="2xl">{displayedMovies}</Heading>
      {data?.pages.map((p, index) => (
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(1, 1fr)" }}
          gap={2}
          key={index}
        >
          {p.results.map((m) => (
            <GridItem key={m.id}>
              <Show below="lg">
                <MovieGridCard movie={m} />
              </Show>
              <Show above="lg">
                <MovieSearchCard movie={m} />
              </Show>
            </GridItem>
          ))}
        </Grid>
      ))}
    </VStack>
  );
};

export default SearchPage;
