import { Button, Icon, VStack } from "@chakra-ui/react";
import { useState } from "react";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import { FaHouseChimney, FaStar } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { MdLocalFireDepartment } from "react-icons/md";
import { RiMovieFill } from "react-icons/ri";

interface Props {
  isOpen: boolean;
  onToggle: () => void;
}

const SideBar = ({ isOpen, onToggle }: Props) => {
  const [selectedNav, setSelectedNav] = useState("Home");

  const navigationItems = [
    { title: "Search", icon: IoIosSearch },
    { title: "Home", icon: FaHouseChimney },
    { title: "Now Playing", icon: RiMovieFill },
    { title: "Popular", icon: MdLocalFireDepartment },
    { title: "Top Rated", icon: FaStar },
  ];

  return (
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
            variant={selectedNav === n.title ? "solid" : "ghost"}
            justifyContent="flex-start"
            key={n.title}
            onClick={() => setSelectedNav(n.title)}
          >
            <Icon fontSize={20} as={n.icon} mr={4} />
            {!isOpen && n.title}
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
  );
};

export default SideBar;
