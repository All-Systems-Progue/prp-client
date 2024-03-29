import { useState } from "react";
import {
  Burger,
  Header as MantineHeader,
  MediaQuery,
  Badge as MantineBadge,
  useMantineTheme,
  Image,
  Group,
} from "@mantine/core";

import SpotlightControl from "../Spotlight/Control";
import Badge from "../Badge";
import { Link } from "react-router-dom";

import ProgueLogo from "/logo/progue-logo.svg";

export default function Header({
  isLoginPage = false,
}: {
  isLoginPage?: boolean;
}): JSX.Element {
  const theme = useMantineTheme();
  const [ opened, setOpened ] = useState(false);

  const headerLogo = (
    <Link to="/" style={{ margin: "auto" }}>
      <Image m="auto" src={ProgueLogo} height={40} alt="Progue Logo" />
    </Link>
  );

  const normalHeaderContent = (
    <>
      <MediaQuery largerThan="sm" styles={{ display: "none" }}>
        <Burger
          opened={opened}
          onClick={() => setOpened((o: boolean) => !o)}
          size="sm"
          color={theme.colors.gray[6]}
          mr="xl"
        />
      </MediaQuery>

      <Group spacing="xs">
        {headerLogo}
        <MantineBadge
          style={{
            marginLeft: "-60px",
            marginTop: "-30px",
            transform: "rotate(10deg)",
          }}
          color="violet"
        >
          ALPHA!
        </MantineBadge>
      </Group>
      <SpotlightControl />
      <Badge />
    </>
  );

  return (
    <MantineHeader
      height={60}
      px="md"
      style={{
        backgroundColor: "#048E80",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100%",
      }}
    >
      {isLoginPage ? headerLogo : normalHeaderContent}
    </MantineHeader>
  );
}
