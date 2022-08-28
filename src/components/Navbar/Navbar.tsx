import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Navbar as MantineNavbar,
  SegmentedControl,
  createStyles,
} from "@mantine/core";
import {
  Search,
  Messages,
  ArrowMerge,
  NewSection,
  FileAnalytics,
  DatabaseImport,
  UserPlus,
  Activity,
} from "tabler-icons-react";

import UserEditPopover from "./UserEditPopover";

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef("icon");

  return {
    navbar: {
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
    },

    link: {
      ...theme.fn.focusStyles(),
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      fontSize: theme.fontSizes.sm,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[1]
          : theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      "&:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[7]
            : theme.colors.gray[0],
        color: theme.colorScheme === "dark" ? theme.white : theme.black,

        [`& .${icon}`]: {
          color: theme.colorScheme === "dark" ? theme.white : theme.black,
        },
      },
    },

    linkIcon: {
      ref: icon,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[2]
          : theme.colors.gray[6],
      marginRight: theme.spacing.sm,
    },

    linkActive: {
      "&, &:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
            : theme.colors[theme.primaryColor][0],
        color:
          theme.colors[theme.primaryColor][
            theme.colorScheme === "dark" ? 4 : 7
          ],
        [`& .${icon}`]: {
          color:
            theme.colors[theme.primaryColor][
              theme.colorScheme === "dark" ? 4 : 7
            ],
        },
      },
    },

    footer: {
      borderTop: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[3]
      }`,
      paddingTop: theme.spacing.md,
    },
  };
});

const tabs = {
  review: [
    { link: "/review/create", label: "Create", icon: NewSection },
    { link: "/review/edit", label: "Edit", icon: FileAnalytics },
    { link: "/review/search", label: "Search", icon: Search },
    { link: "/review/merge", label: "Merge", icon: ArrowMerge },
    { link: "/review/db", label: "Database", icon: DatabaseImport },
  ],
  user: [
    { link: "/user/create", label: "New User", icon: UserPlus },
    { link: "/user/messages", label: "Messages", icon: Messages },
    { link: "/user/activity", label: "Activity", icon: Activity },
  ],
};

type NavLinkI = {
  link: string;
  label: string;
  icon: any;
};

export default function Navbar(): JSX.Element {
  const { classes, cx } = useStyles();
  const [section, setSection] = useState("review");

  useEffect(() => {
    window.location.pathname.includes("review")
      ? setSection("review")
      : setSection("user");
  }, []);

  const links = (tabs as any)[section].map((item: NavLinkI) => (
    <Link
      className={cx(classes.link, {
        [classes.linkActive]: window.location.pathname.includes(
          item.link.toLowerCase()
        ),
      })}
      to={item.link}
      key={item.label}
    >
      <item.icon className={classes.linkIcon} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <MantineNavbar
      width={{ sm: 260, md: 260 }}
      p="sm"
      className={classes.navbar}
    >
      <MantineNavbar.Section>
        <SegmentedControl
          value={section}
          onChange={setSection}
          transitionTimingFunction="ease"
          fullWidth
          data={[
            { label: "Review Points", value: "review" },
            { label: "User", value: "user" },
          ]}
        />
      </MantineNavbar.Section>

      <MantineNavbar.Section grow mt="sm">
        {links}
      </MantineNavbar.Section>
      <MantineNavbar.Section className={classes.footer}>
        <UserEditPopover />
      </MantineNavbar.Section>
    </MantineNavbar>
  );
}
