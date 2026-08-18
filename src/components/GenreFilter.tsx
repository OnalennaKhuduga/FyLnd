import {
  Box,
  Button,
  Grid,
  GridItem,
  Icon,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import genres from "../data/genres";
import useMovieQueryStore from "../useMovieQueryStore";

const GenreFilter = () => {
  const genreId = useMovieQueryStore((s) => s.movieQuery.genreId);
  const { setGenreId } = useMovieQueryStore();

  const handleGenreSelect = (id: number): void => {
    id == genreId ? setGenreId(undefined) : setGenreId(id);
  };

  return (
    <Box w="100%" noOfLines={1}>
      <Popover placement="bottom-end">
        {({ isOpen }) => (
          <>
            <PopoverTrigger>
              <Button>
                <Icon as={isOpen ? FaAngleUp : FaAngleDown} />
              </Button>
            </PopoverTrigger>

            <PopoverContent>
              <PopoverBody>
                <Grid templateColumns="repeat(2, 1fr)" gap={2}>
                  {Array.from(genres.entries()).map(([id, title]) => (
                    <GridItem key={id}>
                      <Button
                        variant={genreId === id ? "solid" : "outline"}
                        onClick={() => handleGenreSelect(id)}
                      >
                        {title}
                      </Button>
                    </GridItem>
                  ))}
                </Grid>
              </PopoverBody>
            </PopoverContent>
          </>
        )}
      </Popover>

      {Array.from(genres.entries()).map(([id, title]) => (
        <Button
          marginX={1}
          key={id}
          variant={genreId === id ? "solid" : "outline"}
          onClick={() => handleGenreSelect(id)}
        >
          {title}
        </Button>
      ))}
    </Box>
  );
};

export default GenreFilter;
