import { Page } from "@components/Page";
import { Grid } from "@mantine/core";

import { CreateUserForm } from "./CreateUserForm";

export const CreateUser = (): JSX.Element => {
  return (
    <Page>
      <Grid>
        <Grid.Col span={4}>
          <CreateUserForm />
        </Grid.Col>
      </Grid>
    </Page>
  );
};
