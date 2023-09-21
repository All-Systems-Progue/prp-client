import { Page } from "@components/Page";
import { Grid } from "@mantine/core";

import { Editor } from "../Editor";
import { CreateReviewForm } from "./CreateReviewForm";

export const CreateReview = (): JSX.Element => {
  return (
    <Page>
      <Grid>
        <Grid.Col span={4}>
          <CreateReviewForm />
        </Grid.Col>
        <Grid.Col span={8}>
          <Editor />
        </Grid.Col>
      </Grid>
    </Page>
  );
};
