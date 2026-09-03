import {
  Button,
  Center,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import ClearWatchlistModal from "../../components/ClearWatchlistModal";
import MovieWatchlistCard from "../../components/MovieWatchlistCard";
import useMovieWatchlistStore from "../../stores/useMovieWatchlistStore";

const WatchlistPage = () => {
  const watchlist = useMovieWatchlistStore((s) => s.watchlist);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ClearWatchlistModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <VStack spacing={4} align="flex-start">
        <HStack w="100%" justifyContent="space-between">
          <Heading fontSize="2xl">Watchlist</Heading>
          <HStack>
            <Text fontSize="xl">{watchlist.length} movies</Text>
            {watchlist.length > 0 && (
              <Button
                variant="outline"
                colorScheme="red"
                onClick={() => setIsOpen(true)}
              >
                <Icon as={FaRegTrashAlt} />
              </Button>
            )}
          </HStack>
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
    </>
  );
};

export default WatchlistPage;
