import { Center, Text } from "@chakra-ui/react";

const MoviePlaceholder = () => {
  return (
    <Center bg="blackAlpha.600" w="100%" h="100%" borderRadius={10} padding={5}>
      <Text>No image available</Text>
    </Center>
  );
};

export default MoviePlaceholder;
