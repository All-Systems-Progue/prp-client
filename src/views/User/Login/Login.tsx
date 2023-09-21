import { AppShell, Grid, Image, useMantineTheme } from "@mantine/core";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import TeamCollabArt from "/art/team-colab.svg";

import Header from "../../../components/Header";
import LoginForm from "./Form";
import styles from "./Login.module.css";

export default function Login(): JSX.Element {
  const navigate = useNavigate();
  const [cookies, _] = useCookies(["token"]);

  useEffect(() => {
    if (cookies.token) {
      //navigate("/review/create");
    }
  }, []);

  const theme = useMantineTheme();
  const children = (
    <Grid>
      <Grid.Col span={4}>
        <LoginForm />
      </Grid.Col>
      <Grid.Col span={8}>
        <Image mt="md" mx="auto" className={styles.splash_image} src={TeamCollabArt} alt="Stock image" />
      </Grid.Col>
    </Grid>
  );

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
      header={<Header isLoginPage />}
    >
      {children}
    </AppShell>
  );
}
