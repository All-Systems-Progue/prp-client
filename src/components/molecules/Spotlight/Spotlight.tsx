import { reviewPaths, usePathToSpotlight, userPaths } from "@domain/paths";
import { rem } from "@mantine/core";
import { Spotlight as MantineSpotlight, SpotlightActionData, SpotlightActionGroupData } from "@mantine/spotlight";
import { IconSearch } from "@tabler/icons-react";

export const Spotlight = (): JSX.Element => {
  const pathToSpotlight = usePathToSpotlight();
  const actions: (SpotlightActionGroupData | SpotlightActionData)[] = [
    {
      group: "Review Points",
      actions: reviewPaths.map(pathToSpotlight),
    },
    {
      group: "User Centre",
      actions: userPaths.map(pathToSpotlight),
    },
  ];

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
