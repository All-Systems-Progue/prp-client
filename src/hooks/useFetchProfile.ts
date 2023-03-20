import { QueryFunctionContext, useQuery } from "react-query";
import api from "../utils/api";

async function fetchProfile({ queryKey }: QueryFunctionContext) {
  const [ _, jwt ] = queryKey;
  const { data } = await api({
    method: "get",
    url: "/user/profile",
    headers: { Authorization: `Bearer ${jwt}` },
  });
  return data;
}

export default (token: string) =>
  useQuery([ "fetchProfile", token ], fetchProfile, {
    enabled: !!token,
  });
