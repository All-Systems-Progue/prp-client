import { TextInput, useMantineTheme } from "@mantine/core";
import { useFocusTrap } from "@mantine/hooks";
import { ChangeEvent } from "react";
import { Search as SearchIcon } from "tabler-icons-react";

export default function Searchbar({
  onChangeCallback,
}: {
  onChangeCallback: (e: ChangeEvent<HTMLInputElement>) => void;
}): JSX.Element {
  const theme = useMantineTheme();
  const focusTrapRef = useFocusTrap();

  return (
    <TextInput
      size="lg"
      ref={focusTrapRef}
      icon={<SearchIcon size={18} />}
      style={{ boxShadow: theme.shadows.lg, border: "none" }}
      placeholder="Search Review Points Database..."
      onChange={onChangeCallback}
    />
  );
}
