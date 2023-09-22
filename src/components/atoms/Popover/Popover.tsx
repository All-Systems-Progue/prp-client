import { Popover as MantinePopover, Text } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";
import { ReactElement, useState } from "react";

export const Popover = ({ target, popover }: { target: ReactElement; popover: string }): JSX.Element => {
  const [opened, setOpened] = useState(false);

  return (
    <MantinePopover
      opened={opened}
      onClose={() => setOpened(false)}
      position="bottom"
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
