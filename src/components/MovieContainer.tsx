import { VStack } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MovieContainer = ({ children }: Props) => {
  return (
    <VStack w="100%" spacing={10} padding={2}>
      {children}
    </VStack>
  );
};

export default MovieContainer;
