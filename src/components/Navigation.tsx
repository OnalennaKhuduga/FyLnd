import { Button, HStack, Icon, Show, VStack } from "@chakra-ui/react";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import { FaHouseChimney, FaStar } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { MdLocalFireDepartment } from "react-icons/md";
import { RiMovieFill } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
import useMovieQueryStore from "../useMovieQueryStore";

interface Props {
  isOpen?: boolean;
  onToggle?: () => void;
}

const Navigation = ({ isOpen, onToggle }: Props) => {
  const location = useLocation();
  const navigate = useNavigate();

  const setGenreId = useMovieQueryStore((s) => s.setGenreId);

  const navigationItems = [
    { label: "Search", icon: IoIosSearch, path: "/search" },
    { label: "Home", icon: FaHouseChimney, path: "/" },
    { label: "Now Playing", icon: RiMovieFill, path: "/now_playing" },
    { label: "Popular", icon: MdLocalFireDepartment, path: "/popular" },
    { label: "Top Rated", icon: FaStar, path: "/top_rated" },
  ];

  const onNavigate = (path: string) => {
    navigate(path);
    setGenreId(undefined);
  };

  return (
    <>
      <Show above="lg">
        <VStack
          align="flex-start"
          h="100%"
          padding="8px"
          justifyContent="space-between"
        >
          <VStack spacing={3} w="100%">
            {navigationItems.map((n) => (
              <Button
                w="100%"
                h={16}
                variant={location.pathname === n.path ? "solid" : "ghost"}
                justifyContent="flex-start"
                key={n.path}
                onClick={() => onNavigate(n.path)}
              >
                <Icon fontSize={20} as={n.icon} mr={4} />
                {!isOpen && n.label}
              </Button>
            ))}
          </VStack>
          <Button
            onClick={onToggle}
            variant="ghost"
            w="100%"
            justifyContent="flex-start"
            h={16}
          >
            <Icon
              as={isOpen ? FaRegArrowAltCircleRight : FaRegArrowAltCircleLeft}
              fontSize={20}
              mr={4}
            />
            {!isOpen && "Hide menu"}
          </Button>
        </VStack>
      </Show>

      <Show below="lg">
        <HStack padding={4} spacing={2} h="75px" justifyContent="space-between">
          {navigationItems
            .filter((n) => n.label !== "Search")
            .map((n) => (
              <Button
                onClick={() => onNavigate(n.path)}
                key={n.label}
                variant={location.pathname === n.path ? "solid" : "ghost"}
              >
                <Icon fontSize={25} as={n.icon} />
              </Button>
            ))}
        </HStack>
      </Show>
    </>
  );
};

export default Navigation;
