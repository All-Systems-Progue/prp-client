import {
  ActionIcon,
  Anchor,
  Avatar,
  Button,
  Group,
  Popover,
  Text,
  TextInput,
  useMantineTheme,
} from "@mantine/core";
import { useForm, useMediaQuery } from "@mantine/hooks";
import { ChangeEvent, useState } from "react";
import { Edit } from "tabler-icons-react";

interface UserEditFormProps {
  initialValues: { name: string; email: string };
  onSubmit(values: { name: string; email: string }): void;
  onCancel(): void;
}

function UserEditForm({
  initialValues,
  onSubmit,
  onCancel,
}: UserEditFormProps) {
  const isMobile = useMediaQuery("(max-width: 755px");

  const form = useForm({
    initialValues,
    validationRules: {
      name: (value: string) => value.trim().length > 2,
      email: (value: string) => value.trim().length > 2,
    },
  });

  return (
    <form onSubmit={form.onSubmit(onSubmit)}>
      <TextInput
        required
        label="Name"
        placeholder="Name"
        style={{ minWidth: isMobile ? 220 : 300 }}
        value={form.values.name}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          form.setFieldValue("name", event.currentTarget.value)
        }
        error={form.errors.name}
        variant="default"
      />

      <TextInput
        required
        label="Email"
        placeholder="Email"
        style={{ minWidth: isMobile ? 220 : 300, marginTop: 15 }}
        value={form.values.email}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          form.setFieldValue("email", event.currentTarget.value)
        }
        error={form.errors.email}
        variant="default"
      />

      <Group position="apart" style={{ marginTop: 15 }}>
        <Anchor component="button" color="gray" size="sm" onClick={onCancel}>
          Cancel
        </Anchor>
        <Button type="submit" size="sm">
          Save
        </Button>
      </Group>
    </form>
  );
}

interface UserProps {
  name: string;
  email: string;
  className?: string;
}

function User({ name, email, className }: UserProps) {
  return (
    <div
      className={className}
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <Avatar style={{ marginRight: 15 }}>
        {name
          .split(" ")
          .map((part: string) => part.charAt(0).toUpperCase())
          .slice(0, 2)
          .join("")}
      </Avatar>

      <div>
        <Text>{name}</Text>
        <Text size="xs" color="gray">
          {email}
        </Text>
      </div>
    </div>
  );
}

export default function UserPopover(): JSX.Element {
  const [ values, setValues ] = useState({
    name: "Bob Handsome",
    email: "bob@handsome.inc",
  });
  const [ opened, setOpened ] = useState(false);
  const theme = useMantineTheme();

  return (
    <Group>
      <User name={values.name} email={values.email} />

      <Popover
        opened={opened}
        onClose={() => setOpened(false)}
        position="top"
        placement="end"
        withCloseButton
        title="Edit user"
        transition="pop-top-right"
        target={
          <ActionIcon
            variant={theme.colorScheme === "dark" ? "hover" : "light"}
            onClick={() => setOpened((o) => !o)}
          >
            <Edit size={16} />
          </ActionIcon>
        }
      >
        <UserEditForm
          initialValues={values}
          onCancel={() => setOpened(false)}
          onSubmit={(data) => {
            setValues(data);
            setOpened(false);
          }}
        />
      </Popover>
    </Group>
  );
}
