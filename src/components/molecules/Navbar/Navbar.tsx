import { AppShell, Stack } from "@mantine/core";
import {
  Icon,
  IconArrowMerge,
  IconDatabaseImport,
  IconFileAnalytics,
  IconFileExport,
  IconNewSection,
  IconSearch,
} from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import classes from "./Navbar.module.css";
import { UserEditPopover } from "./UserEditPopover";

type NavItem = {
  link: string;
  label: string;
  icon: Icon;
};

const tabs = [
  { link: "/review/create", label: "Create", icon: IconNewSection },
  { link: "/review/edit", label: "Edit", icon: IconFileAnalytics },
  { link: "/review/search", label: "Search", icon: IconSearch },
  { link: "/review/export", label: "Export", icon: IconFileExport },
  { link: "/review/merge", label: "Merge", icon: IconArrowMerge },
  { link: "/review/db", label: "Database", icon: IconDatabaseImport },
] as NavItem[];

export function Navbar() {
  const [active, setActive] = useState<string | undefined>(undefined);

  const links = tabs.map((item: NavItem) => (
    <Link
      key={item.label}
      className={classes.link}
      data-active={item.label === active || undefined}
      to={item.link}
      onClick={() => setActive(item.label)}
    >
      <item.icon className={classes.linkIcon} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <AppShell.Navbar className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Stack justify="center" gap={0}>
          {links}
        </Stack>
      </div>

      <div className={classes.footer}>
        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <UserEditPopover />
        </a>

        {/* <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a> */}
      </div>
    </AppShell.Navbar>
  );
}
