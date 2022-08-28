import type { SpotlightAction } from "@mantine/spotlight";
import { SpotlightProvider } from "@mantine/spotlight";
import React from "react";
import { Home, Database, FileText, Search } from "tabler-icons-react";

const actions: SpotlightAction[] = [
  {
    title: "Home",
    description: "Get to home page",
    onTrigger: () => "Home",
    icon: <Home size={18} />,
  },
  {
    title: "Database",
    description: "Get full information about current system status",
    onTrigger: () => "Database",
    icon: <Database size={18} />,
  },
  {
    title: "Documentation",
    description: "Visit documentation to lean more about all features",
    onTrigger: () => "Documentation",
    icon: <FileText size={18} />,
  },
];

export default function Spotlight({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <SpotlightProvider
      actions={actions}
      searchIcon={<Search size={18} />}
      searchPlaceholder="Search..."
      shortcut="mod + shift + 1"
      nothingFoundMessage="Nothing found..."
    >
      {children}
    </SpotlightProvider>
  );
}
