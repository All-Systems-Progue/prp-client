import { reviewPaths } from "@domain/paths";
import { AppShell, Badge, Stack } from "@mantine/core";
import { useAppSelector } from "@redux/hooks";
import { selectReviewsForExport } from "@reviews/reviewSlice";
import { theme } from "@utils/theme";
import { useState } from "react";
import { Link } from "react-router-dom";

import classes from "./Navbar.module.css";
import { UserEditPopover } from "./UserEditPopover";

const Counter = <T,>({ arr }: { arr: T[] | undefined }) => {
  return (
    arr?.length && (
      <Badge ml={theme.spacing.sm} variant="dot">
        {arr.length}
      </Badge>
    )
  );
};

export function Navbar() {
  const [active, setActive] = useState<string | undefined>(undefined);

  const selectedReviews = useAppSelector(selectReviewsForExport);

  const links = reviewPaths.map((item) => (
    <Link
      key={item.label}
      className={classes.link}
      data-active={item.label === active || undefined}
      to={item.link}
      onClick={() => setActive(item.label)}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <item.icon className={classes.linkIcon} />
        <span>{item.label}</span>
      </div>
      {item.id === "export" && <Counter arr={selectedReviews} />}
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
