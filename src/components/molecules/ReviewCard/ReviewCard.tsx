import { ActionIcon, Avatar, Badge, Box, Checkbox, Divider, Grid, Group, Paper, Title } from "@mantine/core";
import { useAppDispatch } from "@redux/hooks";
import { selectReview } from "@reviews/reviewSlice";
import { IconAlertTriangle, IconMaximize, IconTrashX } from "@tabler/icons-react";
import parse from "html-react-parser";
import { Hit } from "meilisearch";
import { Link } from "react-router-dom";

import { Popover } from "../../atoms/Popover";

type ReviewCardProps = {
  review: Hit;
};

export const ReviewCard = ({ review }: ReviewCardProps): JSX.Element => {
  return (
    <Paper shadow="lg" mb="lg" p="md">
      <Grid>
        <Grid.Col span={4}>
          <Title mb="sm" order={1}>
            {parse(review._formatted?.entityType)}
          </Title>
          <Title mb="sm" order={3}>
            {parse(review._formatted?.category)}
          </Title>
          <Title mb="sm" order={6}>
            {parse(review._formatted?.subCategory)}
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
            <ExportOptions />
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
        <Grid.Col span={8}>{parse(review._formatted?.content)}</Grid.Col>
      </Grid>
    </Paper>
  );
};

function ExportOptions({ review }: Partial<ReviewCardProps>) {
  const dispatch = useAppDispatch();
  return (
    <Checkbox.Group label="Export" description="Select an export format">
      <Group mt="xs">
        <Checkbox value="word" label="Word" />
        <Checkbox value="pdf" label="PDF" onChange={() => dispatch(selectReview(review?._formatted))} />
      </Group>
    </Checkbox.Group>
  );
}
