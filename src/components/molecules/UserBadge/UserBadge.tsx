import { useAuth } from "@hooks/useAuth";
import { Avatar, Group, Menu, Text, UnstyledButton } from "@mantine/core";
import { IconChevronRight, IconCookie, IconLogout, IconSettings, IconUserEdit } from "@tabler/icons-react";
import { useFetchProfile, useLogout } from "@users/hooks";
import { forwardRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface UserButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  name: string;
  email: string;
  icon?: React.ReactNode;
}

const UserButton = forwardRef<HTMLButtonElement, UserButtonProps>(
  ({ name, email, icon, ...others }: UserButtonProps, ref) => (
    <UnstyledButton ref={ref} {...others}>
      <Group>
        <Avatar>
          {name
            .split(" ")
            .map((part: string) => part.charAt(0).toUpperCase())
            .slice(0, 2)
            .join("")}
        </Avatar>

        <div style={{ flex: 1 }}>
          <Text size="sm" fw={700}>
            {name}
          </Text>

          <Text size="xs">{email}</Text>
        </div>

        {icon}
      </Group>
    </UnstyledButton>
  ),
);
UserButton.displayName = "UserButton";

export const UserBadge = (): JSX.Element => {
  const navigate = useNavigate();
  const [opened, setOpened] = useState(false);
  const { token } = useAuth();
  const { data, isSuccess } = useFetchProfile(token);
  const logout = useLogout();

  return (
    <Group>
      <Menu
        trigger="hover"
        openDelay={100}
        withArrow
        shadow="md"
        middlewares={{ flip: true, shift: true }}
        onOpen={() => setOpened(true)}
        onClose={() => setOpened(false)}
      >
        <Menu.Target>
          <UserButton
            name={isSuccess ? data.firstName + " " + data.lastName : "Login"}
            email={isSuccess ? data.email : null}
            icon={
              <IconChevronRight
                size={16}
                color="white"
                style={{
                  transform: opened ? `rotate(90deg)` : "none",
                  transition: "transform 200ms ease",
                }}
              />
            }
          />
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Label>Profile</Menu.Label>
          <Menu.Item component={Link} leftSection={<IconUserEdit size={20} />} to="/user/logout/all">
            Edit
          </Menu.Item>
          <Menu.Item component={Link} leftSection={<IconSettings size={20} />} to="/">
            Settings
          </Menu.Item>
          <Menu.Label>Application</Menu.Label>
          <Menu.Item
            component={Link}
            leftSection={<IconLogout size={20} />}
            to="/user/logout"
            onClick={async (e) => {
              e.preventDefault();
              if (token) {
                await logout.mutateAsync(token);
                navigate("/login", { replace: true });
              }
            }}
          >
            Logout
          </Menu.Item>
          <Menu.Item component={Link} leftSection={<IconCookie size={20} />} to="/user/logout/all">
            Logout All
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
};
