import { Button, useMantineTheme } from "@mantine/core";
import { openSpotlight } from "@mantine/spotlight";
import { Search } from "tabler-icons-react";

export default function SpotlightControl(): JSX.Element {
  const theme = useMantineTheme();
  return (
    <Button
      style={{
        width: "40%",
        alignSelf: "center",
        backgroundColor: "white",
        color: theme.colors.brand as any,
      }}
      onClick={openSpotlight}
    >
      <Search style={{ paddingRight: "5px" }} size={18} />
      Search...
    </Button>
  );
}
