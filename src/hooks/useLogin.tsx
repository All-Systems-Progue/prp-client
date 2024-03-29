import { showNotification } from "@mantine/notifications";
import { useCookies } from "react-cookie";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { Check } from "tabler-icons-react";

import { IProfile } from "../interfaces/user";
import api from "../utils/api";

async function loginUser({ email, password }: IProfile) {
  const { data } = await api({
    method: "post",
    url: "/user/login",
    data: { email, password },
  });
  return data;
}

export default () => {
  const [ _, setCookie ] = useCookies([ "token" ]);
  const navigate = useNavigate();

  return useMutation("loginUser", loginUser, {
    onSuccess: ({ token }: { token: string }) => {
      setCookie("token", token, { maxAge: 60 * 60 * 24 * 14 });
      navigate("/review/create");
      showNotification({
        title: "Success",
        message: "Logged in",
        color: "green",
        radius: "lg",
        icon: <Check />,
      });
    },
  });
};
