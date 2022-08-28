import { forwardRef, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Logout, Cookie, ChevronRight } from "tabler-icons-react";
import { Group, Avatar, Text, Menu, UnstyledButton } from "@mantine/core";

import useLogout from "../../hooks/useLogout";
import useFetchProfile from "../../hooks/useFetchProfile";

interface UserButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  name: string;
  email: string;
  icon?: React.ReactNode;
}

const UserButton = forwardRef<HTMLButtonElement, UserButtonProps>(
  ({ name, icon, ...others }: UserButtonProps, ref) => (
    <UnstyledButton
      ref={ref}
      style={{
        height: "60px",
        lineHeight: "60px",
      }}
      sx={(theme) => ({
        display: "block",
        width: "100%",
        padding: `0 ${theme.spacing.md}px`,
        color:
          theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
      })}
      {...others}
    >
      <Group>
        <Avatar>
          {name
            .split(" ")
            .map((part: string) => part.charAt(0).toUpperCase())
            .slice(0, 2)
            .join("")}
        </Avatar>

        <div style={{ flex: 1 }}>
          <Text size="sm" weight={500} color="white">
            {name}
          </Text>
        </div>
        {icon}
      </Group>
    </UnstyledButton>
  )
);

export default function Badge(): JSX.Element {
  const navigate = useNavigate();
  const [opened, setOpened] = useState(false);
  const [cookies, _, removeCookie] = useCookies(["token"]);
  const { data, isSuccess } = useFetchProfile(cookies.token);
  const logout = useLogout();

  return (
    <Group position="center">
      <Menu
        placement="center"
        gutter={5}
        control={
          <UserButton
            onClick={() => setOpened((o: any) => !o)}
            name={isSuccess ? data.firstName + " " + data.lastName : "Login"}
            email={isSuccess ? data.email : null}
            icon={
              <ChevronRight
                size={16}
                color="white"
                style={{
                  transform: opened ? `rotate(90deg)` : "none",
                  transition: "transform 200ms ease",
                }}
              />
            }
          />
        }
      >
        <Menu.Item
          component={Link}
          icon={<Logout size={20} />}
          to="/user/logout"
          onClick={(e: any) => {
            e.preventDefault();
            logout.mutate(cookies.token);
            removeCookie("token");
            navigate("/");
          }}
          styles={{ display: "flex", alignItems: "center" }}
        >
          Logout
        </Menu.Item>
        <Menu.Item
          component={Link}
          icon={<Cookie size={20} />}
          to="/user/logout/all"
          styles={{ display: "flex", alignItems: "center" }}
        >
          Logout All
        </Menu.Item>
      </Menu>
    </Group>
  );
}
