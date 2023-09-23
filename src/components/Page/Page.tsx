import { Header, Spotlight, UserBadge } from "@components/molecules";
import { HeaderLogo } from "@components/molecules/Header/HeaderLogo";
import { SpotlightControl } from "@components/molecules/Spotlight/Control";
import { AppShell, Badge, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconMenu2 } from "@tabler/icons-react";
import React from "react";

import { Navbar } from "../molecules/Navbar";
import classes from "./Page.module.css";

export const Page = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  const MainPageHeader = (
    <>
      <Group>
        <Group h="100%" px="md">
          <IconMenu2 onClick={toggleDesktop} cursor="pointer" color="white" />
        </Group>

        <Group>
          <HeaderLogo />
          <Badge className={classes.versionBadge}>ALPHA</Badge>
        </Group>
      </Group>
      <SpotlightControl />
      <Spotlight />
      <UserBadge />
    </>
  );

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 260, breakpoint: "sm", collapsed: { desktop: !desktopOpened } }}
      padding="md"
    >
      <Header injectableNode={MainPageHeader} />
      <Navbar />
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};
