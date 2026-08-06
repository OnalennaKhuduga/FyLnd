import { Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  metadata: any[];
}

const MetadataList = ({ metadata }: Props) => {
  return (
    <>
      {metadata.map((m, index) => (
        <React.Fragment key={m}>
          {index > 0 && <Text color="gray.400">•</Text>}
          <Text>{m}</Text>
        </React.Fragment>
      ))}
    </>
  );
};

export default MetadataList;
