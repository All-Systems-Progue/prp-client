import { TextInput, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";

export default function UserCreateForm(): JSX.Element {
  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },

    validate: {
      firstName: (value: string) => (value.length < 4 ? "Too short!" : null),
      lastName: (value: string) => (value.length < 4 ? "Too short!" : null),
      email: (value: string) => (value.length < 4 ? "Too short!" : null),
      password: (value: string) => (value.length < 4 ? "Too short!" : null),
    },
  });

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => values)}>
        <TextInput
          required
          label="First Name"
          {...form.getInputProps("firstName")}
          mb="sm"
        />
        <TextInput
          required
          label="Last Name"
          {...form.getInputProps("lastName")}
          mb="sm"
        />
        <TextInput
          required
          label="Email"
          {...form.getInputProps("email")}
          mb="sm"
        />
        <TextInput
          required
          label="Password"
          {...form.getInputProps("password")}
          mb="sm"
        />

        <Group position="left" mt="md">
          <Button type="submit">Create</Button>
        </Group>
      </form>
    </Box>
  );
}
