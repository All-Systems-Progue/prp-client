import { Popover as MantinePopover, PopoverProps, Text } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";
import { ReactElement, useState } from "react";

type Props = {
  target: ReactElement;
  popover: string;
} & PopoverProps;
export const Popover = ({ target, popover, ...props }: Props): JSX.Element => {
  const [opened, setOpened] = useState(false);

  return (
    <MantinePopover
      opened={opened}
      onClose={() => setOpened(false)}
      position={props.position}
      trapFocus={false}
      closeOnEscape={false}
      radius="xl"
      shadow="md"
    >
      <MantinePopover.Target>
        <div onMouseEnter={() => setOpened(true)} onMouseLeave={() => setOpened(false)}>
          {target}
        </div>
      </MantinePopover.Target>
      <MantinePopover.Dropdown>
        <div style={{ display: "flex", alignItems: "center" }}>
          <IconInfoCircle color="blue" size={24} style={{ marginRight: "10px" }} />
          <Text size="md">{popover}</Text>
        </div>
      </MantinePopover.Dropdown>
    </MantinePopover>
  );
};
