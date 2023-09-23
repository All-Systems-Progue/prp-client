import { Box, Button, Group, Loader, PasswordInput, TextInput, Title, useMantineTheme } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useLogin } from "@users/hooks";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import classes from "./UserLoginForm.module.css";

export const UserLoginForm = (): JSX.Element => {
  const login = useLogin();
  const theme = useMantineTheme();
  const navigate = useNavigate();
  const [focused, setFocused] = useState(false);
  const { state } = useLocation();

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value: string) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value: string) => (value.length < 4 ? "Too short!" : null),
    },
  });

  const floating = form.values.email.trim().length !== 0 || form.values.password.trim().length !== 0 || focused;

  const handleSubmit = async (values: typeof form.values) => {
    await login.mutateAsync({ ...values });
    navigate(state?.path || "/home");
  };

  return (
    <Box size="xl" mt="md" mx="auto">
      <Title order={1}>Login</Title>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          label="Email"
          placeholder="staff@progue.com.au"
          required
          labelProps={{ "data-floating": floating }}
          classNames={{
            root: classes.root,
            input: classes.input,
            label: classes.label,
          }}
          style={{
            boxShadow: theme.shadows.md,
          }}
          {...form.getInputProps("email")}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          mt="lg"
          autoComplete="nope"
        />
        <PasswordInput
          label="Password"
          required
          labelProps={{ "data-floating": floating }}
          classNames={{
            root: classes.root,
            input: classes.input,
            label: classes.label,
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...form.getInputProps("password")}
          mt="lg"
          autoComplete="nope"
        />

        <Group mt="lg">
          <Button type="submit">{login.isLoading ? <Loader color="white" size="sm" /> : <span>Log In</span>}</Button>
        </Group>
      </form>
    </Box>
  );
};
