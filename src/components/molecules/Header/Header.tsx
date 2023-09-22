import { AppShell } from "@mantine/core";
import { ReactNode } from "react";

import classes from "./Header.module.css";

type HeaderProps = {
  isLoginPage?: boolean;
  injectableNode?: ReactNode;
};

export const Header = ({ injectableNode = null }: HeaderProps): JSX.Element => {
  return (
    <AppShell.Header px="md" className={classes.header}>
      {injectableNode}
    </AppShell.Header>
  );
};
