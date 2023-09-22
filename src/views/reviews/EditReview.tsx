import { Page } from "@components/Page";
import { Box, Center, Container, Grid, Image, List, Text, Title, useMantineTheme } from "@mantine/core";
import { IconEdit, IconMaximize } from "@tabler/icons-react";
import { Link } from "react-router-dom";

import EditCollabArt from "/art/edit-colab.svg";

export const EditReview = (): JSX.Element => {
  const theme = useMantineTheme();

  return (
    <Page>
      <Container>
        <Grid>
          <Grid.Col span={6}>
            <Box>
              <Title my="sm">
                <IconEdit size={50} style={{ paddingTop: theme.spacing.sm, paddingRight: theme.spacing.sm }} />
                Edit Review Points
              </Title>
              <Text>
                Manually edit review points by using the search feature on the page below.
                <List
                  type="ordered"
                  style={{
                    paddingLeft: theme.spacing.md,
                    margin: theme.spacing.xs,
                  }}
                >
                  <List.Item>
                    Enter a <Link to="/review/search">search</Link> term to find the review point you are after. Any
                    field in the review point will be indexed in the search
                  </List.Item>
                  <List.Item>
                    Click on the <IconMaximize size={16} /> edit button to enter the editor view
                  </List.Item>
                </List>
              </Text>
              <Text>
                Note if a review point is &lsquo;Flagged for Review&lsquo; it means the built-in algorithm either
                detected a formatting issue or missing fields
              </Text>
            </Box>
          </Grid.Col>
          <Grid.Col span={6}>
            <Center>
              <Image mx="auto" src={EditCollabArt} width={400} alt="Stock image" />
            </Center>
          </Grid.Col>
        </Grid>
      </Container>
    </Page>
  );
};
