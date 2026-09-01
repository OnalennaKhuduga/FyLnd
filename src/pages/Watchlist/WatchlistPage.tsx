import {
  Center,
  Grid,
  GridItem,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import useMovieWatchlistStore from "../../stores/useMovieWatchlistStore";
import MovieWatchlistCard from "../../components/MovieWatchlistCard";

const WatchlistPage = () => {
  const watchlist = useMovieWatchlistStore((s) => s.watchlist);

  return (
    <VStack spacing={4} align="flex-start">
      <HStack w="100%" justifyContent="space-between">
        <Heading fontSize="2xl">Watchlist</Heading>
        <Text fontSize="xl">{watchlist.length} movies</Text>
      </HStack>
      {watchlist.length === 0 && (
        <Text>You have no movies in the watchlist.</Text>
      )}

      {watchlist.length > 0 && (
        <Center w="100%">
          <Grid
            templateColumns={{
              base: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(5, 1fr)",
            }}
            gap={{ base: 6, md: 4 }}
          >
            {watchlist.map((m, index) => (
              <GridItem key={index}>
                <MovieWatchlistCard movie={m} />
              </GridItem>
            ))}
          </Grid>
        </Center>
      )}
    </VStack>
  );
};

export default WatchlistPage;
