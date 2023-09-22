import { rem } from "@mantine/core";
import { Spotlight as MantineSpotlight, SpotlightActionData } from "@mantine/spotlight";
import { IconDatabase, IconFileText, IconHome, IconSearch } from "@tabler/icons-react";

const actions: SpotlightActionData[] = [
  {
    id: "home",
    title: "Home",
    description: "Get to home page",
    onClick: () => "Home",
    leftSection: <IconHome size={18} />,
  },
  {
    id: "database",
    title: "Database",
    description: "Get full information about current system status",
    onClick: () => "Database",
    leftSection: <IconDatabase size={18} />,
  },
  {
    id: "documentation",
    title: "Documentation",
    description: "Visit documentation to lean more about all features",
    onClick: () => "Documentation",
    leftSection: <IconFileText size={18} />,
  },
];

export const Spotlight = (): JSX.Element => {
  return (
    <MantineSpotlight
      actions={actions}
      searchProps={{
        leftSection: <IconSearch style={{ width: rem(20), height: rem(20) }} />,
        placeholder: "Search...",
      }}
      shortcut="mod + k"
      nothingFound="Nothing found..."
      highlightQuery
    />
  );
};
