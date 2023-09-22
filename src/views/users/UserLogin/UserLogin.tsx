import { Header, HeaderLogo } from "@components/molecules";
import { AppShell, Grid, Image } from "@mantine/core";
import { UserLoginForm } from "@users/UserLoginForm";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

import TeamCollabArt from "/art/team-colab.svg";

import classes from "./UserLogin.module.css";

export const UserLogin = (): JSX.Element => {
  // const navigate = useNavigate();
  const [cookies, _] = useCookies(["token"]);

  useEffect(() => {
    if (cookies.token) {
      //navigate("/review/create");
    }
  }, []);

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
