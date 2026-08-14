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
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import genres from "../data/genres";

const GenreFilter = () => {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  const handleSetGenre = (genre: string) => {
    genre === selectedGenre ? setSelectedGenre(null) : setSelectedGenre(genre);
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
                        variant={selectedGenre === title ? "solid" : "outline"}
                        onClick={() => handleSetGenre(title)}
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
          variant={selectedGenre === title ? "solid" : "outline"}
          onClick={() => handleSetGenre(title)}
        >
          {title}
        </Button>
      ))}
    </Box>
  );
};

export default GenreFilter;
