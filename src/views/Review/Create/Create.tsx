import { Grid } from "@mantine/core";

import Page from "../../../components/Page";
import Editor from "./Editor";
import Form from "./Form";

export default function ReviewCreate(): JSX.Element {
  return (
    <Page>
      <Grid>
        <Grid.Col span={4}>
          <Form />
        </Grid.Col>
        <Grid.Col span={8}>
          <Editor />
        </Grid.Col>
      </Grid>
    </Page>
  );
}
