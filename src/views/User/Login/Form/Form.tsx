import { useState } from "react";
import {
  TextInput,
  createStyles,
  Box,
  Group,
  Button,
  Title,
  PasswordInput,
  Loader,
  MantineTheme,
  useMantineTheme,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import useLogin from "../../../../hooks/useLogin";

const useStyles = createStyles(
  (theme: MantineTheme, { floating }: { floating: boolean }) => ({
    root: {
      position: "relative",
    },

    label: {
      position: "absolute",
      zIndex: 2,
      top: 7,
      left: theme.spacing.sm,
      pointerEvents: "none",
      color: floating
        ? theme.colorScheme === "dark"
          ? theme.white
          : theme.black
        : theme.colorScheme === "dark"
        ? theme.colors.dark[3]
        : theme.colors.gray[5],
      transition:
        "transform 150ms ease, color 150ms ease, font-size 150ms ease",
      transform: floating ? `translate(-${theme.spacing.sm}px, -28px)` : "none",
      fontSize: floating ? theme.fontSizes.xs : theme.fontSizes.sm,
      fontWeight: floating ? 500 : 400,
    },

    required: {
      transition: "opacity 150ms ease",
      opacity: floating ? 1 : 0,
    },

    input: {
      "&::placeholder": {
        transition: "color 150ms ease",
        color: !floating ? "transparent" : undefined,
      },
    },
  })
);

export default function LoginForm(): JSX.Element {
  const theme = useMantineTheme();
  const [focused, setFocused] = useState(false);
  const login = useLogin();

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value: string) =>
        /^\S+@\S+$/.test(value) ? null : "Invalid email",
      password: (value: string) => (value.length < 4 ? "Too short!" : null),
    },
  });

  const { classes } = useStyles({
    floating:
      form.values.email.trim().length !== 0 ||
      form.values.password.trim().length !== 0 ||
      focused,
  });

  const handleSubmit = async (values: typeof form.values) => {
    login.mutate({ ...values });
  };

  return (
    <Box sx={{ width: 300 }} mt="md" mx="auto">
      <Title order={1}>Login</Title>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          label="Email"
          placeholder="staff@progue.com.au"
          required
          classNames={classes}
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
          classNames={classes}
          style={{
            boxShadow: theme.shadows.md,
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...form.getInputProps("password")}
          mt="lg"
          autoComplete="nope"
        />

        <Group position="left" mt="lg">
          <Button type="submit">
            {login.isLoading ? (
              <Loader color="white" size="sm" />
            ) : (
              <span>Log In</span>
            )}
          </Button>
        </Group>
      </form>
    </Box>
  );
}
