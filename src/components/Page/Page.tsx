import { Header } from "@components/Header";
import { AppShell, useMantineTheme } from "@mantine/core";
import { useUserOnline } from "@users/hooks";
import React from "react";

// import Sidebar from "../Sidebar";
// import Footer from "../Footer";
import { Navbar } from "../Navbar";

export const Page = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const theme = useMantineTheme();
  useUserOnline();

  return (
    <AppShell
      styles={{
        main: {
          overflowX: "hidden",
          overflowY: "auto",
          background: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      header={<Header />}
      navbar={<Navbar />}
      // aside={<Sidebar />}
      // footer={<Footer />}
    >
      {children}
    </AppShell>
  );
};
