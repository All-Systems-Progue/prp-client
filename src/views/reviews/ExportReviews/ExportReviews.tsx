import { SendFilesButton } from "@components/atoms";
import { Page } from "@components/Page";
import { Box, Group, Text, Title } from "@mantine/core";
import { useAppSelector } from "@redux/hooks";
import { selectReviewsForExport } from "@reviews/reviewSlice";

import { DragAndDrop } from "./DragAndDrop";

export const ExportReviews = () => {
  const selectedReviews = useAppSelector(selectReviewsForExport);

  return (
    <Page>
      <Group justify="space-between">
        <Box>
          <Title order={1} mb="xs">
            Export
          </Title>
          <Text mb="xs">Export all selected review points by drag-n-dropping them into the desired order.</Text>
        </Box>

        <SendFilesButton count={selectedReviews.length}>Export to Word</SendFilesButton>
      </Group>
      <DragAndDrop />
    </Page>
  );
};
