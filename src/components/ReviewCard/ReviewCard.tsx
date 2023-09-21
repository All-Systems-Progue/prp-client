import { ActionIcon, Avatar, Badge, Box, Grid, Paper, Title } from "@mantine/core";
import parse from "html-react-parser";
import { Hit } from "meilisearch";
import { Link } from "react-router-dom";
import { Check, Maximize, TrashX } from "tabler-icons-react";

import { Popover } from "../Popover";

export const ReviewCard = ({ review, idx }: { review: Hit; idx: string }): JSX.Element => {
  return (
    <Paper key={idx} shadow="lg" mb="lg" p="md">
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
          <Box
            style={{
              marginBottom: "20px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Popover
              target={
                <Link to={`/review/edit/${review._id}`}>
                  <Avatar radius="xl" style={{ marginRight: "20px", display: "inline-block" }}>
                    <Maximize size={24} />
                  </Avatar>
                </Link>
              }
              popover="Edit review point"
            />
            <Popover
              target={
                <Link to={`/review/delete/${review._id}`}>
                  <Avatar radius="xl" style={{ marginRight: "20px", display: "inline-block" }}>
                    <TrashX size={24} />
                  </Avatar>
                </Link>
              }
              popover="Delete review point"
            />
            <Box>
              {review.isFlagged ? (
                <Badge
                  sx={{ paddingLeft: 10 }}
                  size="lg"
                  radius="xl"
                  leftSection={
                    <ActionIcon size="xs" radius="xl" variant="transparent">
                      <Check size={24} />
                    </ActionIcon>
                  }
                >
                  Flagged for review
                </Badge>
              ) : null}
            </Box>
          </Box>
        </Grid.Col>
        <Grid.Col span={8}>{parse(review._formatted?.content)}</Grid.Col>
      </Grid>
    </Paper>
  );
};
