import { Editor } from "@components/Editor";
import { Page } from "@components/Page";
import { Grid } from "@mantine/core";
import { CreateReviewForm } from "@reviews/CreateReviewForm";

export const CreateReview = (): JSX.Element => {
  return (
    <Page>
      <Grid>
        <Grid.Col span="auto">
          <CreateReviewForm />
        </Grid.Col>
        <Grid.Col span={8}>
          <Editor />
        </Grid.Col>
      </Grid>
    </Page>
  );
};
