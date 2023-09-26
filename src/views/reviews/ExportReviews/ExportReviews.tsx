import { SendFilesButton } from "@components/atoms";
import { Page } from "@components/Page";
import { Box, Group, Text, Title } from "@mantine/core";
import { useAppSelector } from "@redux/hooks";
import { selectReviewsForExport } from "@reviews/reviewSlice";
import { review2Blob } from "@reviews/utils";
import { saveAs } from "file-saver";

import { DragAndDrop } from "./DragAndDrop";

export const ExportReviews = () => {
  const selectedReviews = useAppSelector(selectReviewsForExport);

  const onClick = async () => {
    const blob = await review2Blob(selectedReviews);
    saveAs(blob, `${selectedReviews[0].entityType} - ${selectedReviews[0].createdAt}.docx`);
  };

  return (
    <Page>
      <Group justify="space-between">
        <Box>
          <Title order={1} mb="xs">
            Export
          </Title>
          <Text mb="xs">Export all selected review points by drag-n-dropping them into the desired order.</Text>
        </Box>

        <SendFilesButton count={selectedReviews.length} onClick={onClick}>
          Export to Word
        </SendFilesButton>
      </Group>
      <DragAndDrop />
    </Page>
  );
};
