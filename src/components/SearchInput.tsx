import {
  Button,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import useMovieQueryStore from "../useMovieQueryStore";

const SearchInput = () => {
  const [inputValue, setInputValue] = useState("");
  const setSearchText = useMovieQueryStore((s) => s.setSearchText);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        if (inputValue) {
          setSearchText(inputValue);
        }
      }}
    >
      <InputGroup>
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search movie..."
          minW={{ md: "250px", lg: "300px" }}
        />

        {inputValue && (
          <InputRightElement>
            <Button
              onClick={() => (setInputValue(""), setSearchText(""))}
              variant="ghost"
            >
              <Icon as={RxCross2} />
            </Button>
          </InputRightElement>
        )}
      </InputGroup>
    </form>
  );
};

export default SearchInput;
