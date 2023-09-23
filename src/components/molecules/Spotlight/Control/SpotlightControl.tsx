import { Box, Grid, Kbd, Text, useMantineTheme } from "@mantine/core";
import { spotlight } from "@mantine/spotlight";
import { IconSearch } from "@tabler/icons-react";

export const SpotlightControl = (): JSX.Element => {
  const theme = useMantineTheme();
  return (
    <Box
      py={4}
      px={theme.spacing.xs}
      bg="white"
      style={{
        width: "45%",
        borderRadius: theme.radius.sm,
        color: theme.colors.brand[9],
        cursor: "pointer",
      }}
      onClick={() => spotlight.open()}
    >
      <Grid justify="center">
        <Grid.Col span={2}>
          <Kbd>⌘</Kbd> + <Kbd>k</Kbd>
        </Grid.Col>
        <Grid.Col span={8}>
          <Text fw={700} display="flex" m="auto" style={{ justifyContent: "center", alignItems: "center" }}>
            <IconSearch style={{ paddingRight: "5px" }} size={20} fontWeight={700} stroke={4} />
            Search...
          </Text>
        </Grid.Col>
        <Grid.Col span={2}></Grid.Col>
      </Grid>
    </Box>
  );
};
