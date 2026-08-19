import { Avatar, HStack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import profilePicture from "../assets/profile_picture.jpg";
import SearchInput from "./SearchInput";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Checks whether user has scrolled or not
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HStack
      justifyContent="space-between"
      padding={3}
      paddingX={6}
      spacing={5}
      bg={isScrolled ? "blackAlpha.700" : "transparent"}
      backdropFilter={isScrolled ? "blur(8px)" : "none"}
      transition="background-color 0.2s ease"
    >
      <Text>FilmFind</Text>
      <HStack>
        <SearchInput />
        <Avatar src={profilePicture} size="md" />
      </HStack>
    </HStack>
  );
};

export default NavBar;
