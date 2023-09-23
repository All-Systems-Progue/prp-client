import { useAuth } from "@hooks/useAuth";
import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { api } from "@utils/api";
import { useMutation } from "react-query";

import { IProfile } from "../../interfaces/user";

async function loginUser({ email, password }: IProfile) {
  const { data } = await api({
    method: "post",
    url: "/user/login",
    data: { email, password },
  });
  return data;
}

export const useLogin = () => {
  const { setToken } = useAuth();

  return useMutation("loginUser", loginUser, {
    onSuccess: ({ token }: { token: string }) => {
      setToken(token);
      showNotification({
        title: "Success",
        message: "Logged in",
        color: "green",
        radius: "lg",
        icon: <IconCheck />,
      });
    },
  });
};
