import { ActionIcon, Avatar, Badge, Box, Checkbox, Divider, Grid, Group, Paper, Text, Title } from "@mantine/core";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { removeReview, selectReview, selectReviewsForExport } from "@reviews/reviewSlice";
import { IReview } from "@src/interfaces";
import { IconAlertTriangle, IconMaximize, IconPdf, IconTrashX } from "@tabler/icons-react";
import parse from "html-react-parser";
import { Hit } from "meilisearch";
import { ChangeEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Popover } from "../../atoms/Popover";

type ReviewCardProps = {
  review: Hit<IReview>;
};

export const ReviewCard = ({ review }: ReviewCardProps): JSX.Element => {
  return (
    <Paper shadow="lg" mb="lg" p="md">
      <Grid>
        <Grid.Col span={4}>
          <Title mb="sm" order={1}>
            {parse(review._formatted?.entityType ?? "")}
          </Title>
          <Title mb="sm" order={3}>
            {parse(review._formatted?.category ?? "")}
          </Title>
          <Title mb="sm" order={6}>
            {parse(review._formatted?.subCategory ?? "")}
          </Title>
          <Divider mb="sm" />
          <Box mb="sm">
            {review.isFlagged ? (
              <Badge
                size="lg"
                radius="xl"
                leftSection={
                  <ActionIcon size="xs" radius="xl">
                    <IconAlertTriangle size={24} />
                  </ActionIcon>
                }
              >
                Flagged for review
              </Badge>
            ) : null}
          </Box>
          <Group justify="space-between" mb="sm">
            <ExportOptions review={review} />
            <Group gap={26}>
              <Popover
                target={
                  <Link to={`/review/edit/${review._id}`}>
                    <Avatar radius="xl">
                      <IconMaximize size={24} />
                    </Avatar>
                  </Link>
                }
                popover="Edit review point"
              />
              <Popover
                target={
                  <Link to={`/review/delete/${review._id}`}>
                    <Avatar radius="xl">
                      <IconTrashX size={24} />
                    </Avatar>
                  </Link>
                }
                popover="Delete review point"
              />
            </Group>
          </Group>
        </Grid.Col>
        <Grid.Col span={8}>{parse(review._formatted?.content ?? "")}</Grid.Col>
      </Grid>
    </Paper>
  );
};

const ExportOptions = ({ review }: ReviewCardProps) => {
  const dispatch = useAppDispatch();

  const [selected, setSelected] = useState<boolean>(false);
  const selectedReviews = useAppSelector(selectReviewsForExport);

  useEffect(() => {
    if (selectedReviews.find((r) => r._id === review._id)) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [review._id, selectedReviews]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.currentTarget.checked;
    setSelected(isChecked);

    if (isChecked) {
      dispatch(selectReview(review));
    } else {
      dispatch(removeReview(review));
    }
  };

  return (
    <Box>
      <Box mb="xs">
        <Text fz="lg" fw={500}>
          Export
        </Text>
        <Text fz="sm">Select an export format</Text>
      </Box>
      <Group>
        <Checkbox value="word" checked={selected} label="Word" onChange={handleChange} />
        <Checkbox icon={IconPdf} disabled value="pdf" label="PDF" />
      </Group>
    </Box>
  );
};
