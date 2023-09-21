import { api } from "@utils/api";
import { QueryFunctionContext, useQuery } from "react-query";

async function fetchProfile({ queryKey }: QueryFunctionContext) {
  const [_, jwt] = queryKey;
  const { data } = await api({
    method: "get",
    url: "/user/profile",
    headers: { Authorization: `Bearer ${jwt}` },
  });
  return data;
}

export const useFetchProfile = (token: string) =>
  useQuery(["fetchProfile", token], fetchProfile, {
    enabled: !!token,
  });
