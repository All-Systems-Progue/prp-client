import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { api } from "@utils/api";
import { CookieJar } from "@utils/cookies";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

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
  // const [_, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();
  const jar = new CookieJar();

  return useMutation("loginUser", loginUser, {
    onSuccess: ({ token }: { token: string }) => {
      jar.set("token", token, { maxAge: 60 * 60 * 24 * 14 });
      navigate("/review/create");
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
