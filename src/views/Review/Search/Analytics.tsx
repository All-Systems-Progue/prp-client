import { Box, Center } from "@mantine/core";
import { Braces, History } from "tabler-icons-react";

export default function Analytics({
  searchTime,
  totalMatches,
}: {
  searchTime: number;
  totalMatches: number;
}): JSX.Element {
  return (
    <Center
      px="lg"
      my="lg"
      inline
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Box ml={5} style={{ display: "flex", alignItems: "center" }}>
        <History size={24} style={{ paddingRight: "5px" }} />
        {searchTime} ms search time
      </Box>
      <Box ml={5} style={{ display: "flex", alignItems: "center" }}>
        <Braces size={24} style={{ paddingRight: "5px" }} />
        {totalMatches} total results
      </Box>
    </Center>
  );
}
