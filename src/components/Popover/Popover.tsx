import { Popover as MantinePopover, Text } from "@mantine/core";
import { ReactElement, useState } from "react";
import { InfoCircle } from "tabler-icons-react";

export default function Popover({ target, popover }: { target: ReactElement; popover: string }): JSX.Element {
  const [opened, setOpened] = useState(false);

  return (
    <MantinePopover
      opened={opened}
      onClose={() => setOpened(false)}
      position="bottom"
      placement="center"
      trapFocus={false}
      closeOnEscape={false}
      transition="pop-top-left"
      styles={{ body: { pointerEvents: "none" } }}
      radius="xl"
      spacing="xs"
      shadow="md"
      target={
        <div onMouseEnter={() => setOpened(true)} onMouseLeave={() => setOpened(false)}>
          {target}
        </div>
      }
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <InfoCircle color="blue" size={24} style={{ marginRight: "10px" }} />
        <Text size="md">{popover}</Text>
      </div>
    </MantinePopover>
  );
}
