import { Button, ButtonProps, rem } from "@mantine/core";
import { IconFileExport } from "@tabler/icons-react";

import classes from "./SendFilesButton.module.css";

export const SendFilesButton = (props: ButtonProps & React.ComponentPropsWithoutRef<"button"> & { count: number }) => {
  return (
    <Button
      classNames={classes}
      radius="md"
      {...props}
      leftSection={String(props.count)}
      rightSection={<IconFileExport style={{ width: rem(18) }} />}
    >
      {props.children}
    </Button>
  );
};
