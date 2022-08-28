import { Grid } from "@mantine/core";

import Page from "../../../components/Page";
import UserCreateForm from "./Form";

export default function ReviewCreate(): JSX.Element {
  return (
    <Page>
      <Grid>
        <Grid.Col span={4}>
          <UserCreateForm />
        </Grid.Col>
      </Grid>
    </Page>
  );
}
