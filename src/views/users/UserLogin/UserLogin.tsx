import { Header, HeaderLogo } from "@components/molecules";
import { useAuth } from "@hooks/useAuth";
import { AppShell, Grid, Image } from "@mantine/core";
import { UserLoginForm } from "@users/UserLoginForm";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import TeamCollabArt from "/art/team-colab.svg";

import classes from "./UserLogin.module.css";

export const UserLogin = (): JSX.Element => {
  const { token } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();

  // in case the user is logged in and lands back in here
  useEffect(() => {
    if (token) {
      navigate(state?.path || "/home");
    }
  }, [navigate, state?.path, token]);

  return (
    <AppShell header={{ height: 60 }} padding="md" className={classes.main}>
      <Header injectableNode={<HeaderLogo />} />
      <AppShell.Main>
        <Grid>
          <Grid.Col span={4}>
            <UserLoginForm />
          </Grid.Col>
          <Grid.Col span={8}>
            <Image mt="md" mx="auto" className={classes.splash_image} src={TeamCollabArt} alt="Stock image" />
          </Grid.Col>
        </Grid>
      </AppShell.Main>
    </AppShell>
  );
};
