import { Badge, Box, Grid, Text, useMantineTheme } from "@mantine/core";
import { spotlight } from "@mantine/spotlight";
import { IconSearch } from "@tabler/icons-react";

export const SpotlightControl = (): JSX.Element => {
  const theme = useMantineTheme();
  return (
    <Box
      py={4}
      px={theme.spacing.sm}
      bg="white"
      style={{
        width: "40%",
        borderRadius: theme.radius.sm,
        color: theme.colors.brand[9],
        cursor: "pointer",
      }}
      onClick={() => spotlight.open()}
    >
      <Grid justify="center">
        <Grid.Col span={2}>
          <Badge color={theme.colors.gray[4]} bg={theme.colors.gray[9]}>
            <Text ff="monospace" fw={700} px={3} py={1} style={{ borderRadius: 4 }}>
              Ctrl+k
            </Text>
          </Badge>
        </Grid.Col>
        <Grid.Col span={8}>
          <Text display="flex" m="auto" style={{ justifyContent: "center", alignItems: "center" }}>
            <IconSearch style={{ paddingRight: "5px" }} size={20} />
            Search...
          </Text>
        </Grid.Col>
        <Grid.Col span={2}></Grid.Col>
      </Grid>
    </Box>
  );
};
