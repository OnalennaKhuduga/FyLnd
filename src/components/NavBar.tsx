import { Avatar, HStack, Input, Text } from "@chakra-ui/react";
import profilePicture from "../assets/profile_picture.jpg";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding={3} paddingX={6} spacing={5}>
      <Text>FilmFind</Text>
      <HStack>
        <Input
          placeholder="Search movie..."
          minW={{ md: "250px", lg: "300px" }}
        />
        <Avatar src={profilePicture} size="md" />
      </HStack>
    </HStack>
  );
};

export default NavBar;
