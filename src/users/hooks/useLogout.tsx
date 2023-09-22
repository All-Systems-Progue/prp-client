import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { api } from "@utils/api";
import { useMutation } from "react-query";

async function logoutUser(jwt: string) {
  const { data } = await api({
    method: "post",
    url: "/user/logout",
    headers: { Authorization: `Bearer ${jwt}` },
  });
  return data;
}

export const useLogout = () =>
  useMutation("logoutUser", logoutUser, {
    onSuccess: () =>
      showNotification({
        title: "Success",
        message: "Logged out",
        color: "green",
        radius: "lg",
        icon: <IconCheck />,
      }),
  });
