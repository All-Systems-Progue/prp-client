import { Button, ButtonProps, rem } from "@mantine/core";
import { IconFileExport } from "@tabler/icons-react";

import classes from "./SendFilesButton.module.css";

type SendFilesButtonProps = {
  count: number;
  onClick?: () => void;
};

export const SendFilesButton = (
  props: ButtonProps & React.ComponentPropsWithoutRef<"button"> & SendFilesButtonProps,
) => {
  return (
    <Button
      classNames={classes}
      radius="md"
      {...props}
      leftSection={String(props.count)}
      rightSection={<IconFileExport style={{ width: rem(18) }} />}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
};
