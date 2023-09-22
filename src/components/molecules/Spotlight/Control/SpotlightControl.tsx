import { Button, useMantineTheme } from "@mantine/core";
import { spotlight } from "@mantine/spotlight";
import { IconSearch } from "@tabler/icons-react";

export const SpotlightControl = (): JSX.Element => {
  const theme = useMantineTheme();
  return (
    <Button
      style={{
        width: "40%",
        alignSelf: "center",
        backgroundColor: "white",
        color: theme.colors.brand[0],
      }}
      onClick={() => spotlight.open()}
    >
      <IconSearch style={{ paddingRight: "5px" }} size={18} />
      Search...
    </Button>
  );
};
