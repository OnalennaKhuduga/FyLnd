import { Avatar, Button, HStack, Icon } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import profilePicture from "../assets/profile_picture.jpg";
import SearchInput from "./SearchInput";

interface Props {
  isDark?: boolean;
}

const NavBar = ({ isDark }: Props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchPath = "/search";
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
      bg={
        !isDark
          ? isScrolled
            ? "blackAlpha.700"
            : "transparent"
          : "blackAlpha.700"
      }
      backdropFilter={isScrolled ? "blur(8px)" : "none"}
      transition="background-color 0.2s ease"
    >
      <Link to="/">FilmFind</Link>
      <HStack>
        {location.pathname === searchPath ? (
          <SearchInput />
        ) : (
          <Button
            onClick={() => navigate(searchPath)}
            fontSize="2xl"
            fontWeight="bold"
            variant="ghost"
          >
            <Icon as={IoIosSearch} />
          </Button>
        )}
        <Avatar src={profilePicture} size="md" />
      </HStack>
    </HStack>
  );
};

export default NavBar;
