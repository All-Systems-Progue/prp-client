import { SpotlightActionData } from "@mantine/spotlight";
import {
  Icon,
  IconArrowMerge,
  IconDatabaseImport,
  IconFileAnalytics,
  IconFileExport,
  IconNewSection,
  IconSearch,
  IconUserEdit,
  IconUserPlus,
  IconUserSearch,
  IconUsersGroup,
} from "@tabler/icons-react";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

export type PathItem<T> = {
  id: string;
  link: T;
  label: string;
  description: string;
  icon: Icon;
};

type ReviewUrlPath = `/review/${string}`;

export const reviewPaths: PathItem<ReviewUrlPath>[] = [
  {
    id: "create",
    link: "/review/create",
    label: "Create",
    icon: IconNewSection,
    description: "Create new reviews",
  },
  {
    id: "edit",
    link: "/review/edit",
    label: "Edit",
    icon: IconFileAnalytics,
    description: "Edit existing reviews with ease",
  },
  {
    id: "search",
    link: "/review/search",
    label: "Search",
    icon: IconSearch,
    description: "Efficiently search for specific reviews",
  },
  {
    id: "export",
    link: "/review/export",
    label: "Export",
    icon: IconFileExport,
    description: "Export your review data for analysis",
  },
  {
    id: "merge",
    link: "/review/merge",
    label: "Merge",
    icon: IconArrowMerge,
    description: "Merge multiple reviews into one",
  },
  {
    id: "database",
    link: "/review/db",
    label: "Database",
    icon: IconDatabaseImport,
    description: "Manage your review database efficiently",
  },
];

type UserUrlPath = `/user/${string}`;

export const userPaths: PathItem<UserUrlPath>[] = [
  {
    id: "create",
    link: "/user/create",
    label: "Create",
    icon: IconUserPlus,
    description: "Create new users",
  },
  {
    id: "edit",
    link: "/user/edit",
    label: "Edit",
    icon: IconUserEdit,
    description: "Edit existing users with ease",
  },
  {
    id: "search",
    link: "/user/search",
    label: "Search",
    icon: IconUserSearch,
    description: "Efficiently search for specific users",
  },
  {
    id: "database",
    link: "/user/db",
    label: "Manage",
    icon: IconUsersGroup,
    description: "Manage your user database efficiently",
  },
];

export const usePathToSpotlight = <T,>(): ((path: PathItem<T>) => SpotlightActionData) => {
  const navigate = useNavigate();

  return useMemo(
    () => (path: PathItem<T>) => ({
      id: path.id,
      label: path.label,
      description: path.description,
      onClick: (e) => {
        e.preventDefault();
        navigate(path.link as string);
      },
      leftSection: <path.icon />,
    }),
    [navigate],
  );
};
