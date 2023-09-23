import { Button, Container, Group, Text, Title } from "@mantine/core";
import { Link } from "react-router-dom";

import classes from "./404.module.css";
import { _404 } from "./404.svg";

export function NotFoundPage() {
  return (
    <Container className={classes.root}>
      <div className={classes.inner}>
        <_404 className={classes.image} />
        <div className={classes.content}>
          <Title className={classes.title}>Nothing to see here</Title>
          <Text c="dimmed" size="lg" ta="center" className={classes.description}>
            Page you are trying to open does not exist. You may have mistyped the address, or the page has been moved to
            another URL. If you think this is an error contact support.
          </Text>
          <Group justify="center">
            <Link to="/home">
              <Button size="md">Take me back to home page</Button>
            </Link>
          </Group>
        </div>
      </div>
    </Container>
  );
}
