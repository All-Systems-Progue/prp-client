import { Box, Center } from "@mantine/core";
import { IconBraces, IconHistory } from "@tabler/icons-react";

type AnalyticsProps = {
  searchTime: number;
  totalMatches: number;
};

export const ReviewAnalytics = ({ searchTime, totalMatches }: AnalyticsProps): JSX.Element => {
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
        <IconHistory size={24} style={{ paddingRight: "5px" }} />
        {searchTime} ms search time
      </Box>
      <Box ml={5} style={{ display: "flex", alignItems: "center" }}>
        <IconBraces size={24} style={{ paddingRight: "5px" }} />
        {totalMatches} total results
      </Box>
    </Center>
  );
};
