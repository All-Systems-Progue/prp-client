import { TextInput, useMantineTheme } from "@mantine/core";
import { useFocusTrap } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons-react";
import { ChangeEvent } from "react";

type SearchBarProps = {
  onChangeCallback: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Searchbar = ({ onChangeCallback }: SearchBarProps): JSX.Element => {
  const theme = useMantineTheme();
  const focusTrapRef = useFocusTrap();

  return (
    <TextInput
      size="lg"
      ref={focusTrapRef}
      leftSection={<IconSearch size={18} />}
      style={{ boxShadow: theme.shadows.lg, border: "none" }}
      placeholder="Search Review Points Database..."
      onChange={onChangeCallback}
    />
  );
};
