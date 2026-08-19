import {
  Button,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const SearchInput = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        if (searchText) {
          console.log(searchText);
        }
      }}
    >
      <InputGroup>
        <Input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search movie..."
          minW={{ md: "250px", lg: "300px" }}
        />

        {searchText && (
          <InputRightElement>
            <Button onClick={() => setSearchText("")} variant="ghost">
              <Icon as={RxCross2} />
            </Button>
          </InputRightElement>
        )}
      </InputGroup>
    </form>
  );
};

export default SearchInput;
