import {
  Button,
  Icon,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import useMovieWatchlistStore from "../stores/useMovieWatchlistStore";
import { FaRegTrashAlt } from "react-icons/fa";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ClearWatchlistModal = ({ isOpen, onClose }: Props) => {
  const clearWatchlist = useMovieWatchlistStore((s) => s.clearWatchlist);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          Are you sure you want to empty your Watchlist?
        </ModalHeader>

        <ModalFooter>
          <Button variant="outline" colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button
            leftIcon={<Icon as={FaRegTrashAlt} />}
            colorScheme="red"
            onClick={() => (clearWatchlist(), onClose())}
          >
            Delete
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ClearWatchlistModal;
