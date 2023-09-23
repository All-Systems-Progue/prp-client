import { Box, Divider, Grid, Group, Paper, Skeleton } from "@mantine/core";

export const ReviewCardSkeleton = () => {
  return (
    <Paper shadow="lg" mb="lg" p="md">
      <Grid>
        <Grid.Col span={4}>
          <Skeleton height={32} mb="sm" radius="md" />
          <Skeleton height={18} mb="sm" radius="md" width="80%" />
          <Skeleton height={12} mb="sm" radius="md" width="50%" />
          <Divider />
          <Group justify="space-between">
            <Box>
              <Skeleton height={32} mb="sm" radius="md" />
              <Skeleton height={32} mb="sm" radius="md" />
            </Box>
            <Group gap={26}>
              <Skeleton height={40} circle mb="xl" />
              <Skeleton height={40} circle mb="xl" />
            </Group>
          </Group>
        </Grid.Col>
        <Grid.Col span={8}>
          <Skeleton height={8} mb={6} radius="xl" />
          <Skeleton height={8} mb={6} radius="xl" />
          <Skeleton height={8} mb={6} radius="xl" width="80%" />
          <Skeleton height={8} mb={6} radius="xl" width="50%" />
        </Grid.Col>
      </Grid>
    </Paper>
  );
};
