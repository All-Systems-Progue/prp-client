import { Button, Container, Group, Text, Title } from "@mantine/core";

import classes from "./500.module.css";
import { _500 } from "./500.svg";

export function ServerErrorPage() {
  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.inner}>
          <_500 className={classes.image} />
          <div className={classes.content}>
            <Title className={classes.title}>All of our servers are busy</Title>
            <Text size="lg" ta="center" className={classes.description}>
              We cannot handle your request right now, please wait for a couple of minutes and refresh the page. Our
              team is already working on this issue.
            </Text>
            <Group justify="center">
              <Button size="md" variant="white">
                Refresh the page
              </Button>
            </Group>
          </div>
        </div>
      </Container>
    </div>
  );
}
