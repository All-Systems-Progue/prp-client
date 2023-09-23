import { useCallback, useMemo } from "react";

import { useCookies } from "./useCookies";

export const useAuth = (): {
  token: string | undefined;
  setToken: (token: string) => void;
  removeToken: () => void;
} => {
  const jar = useCookies();

  const token = useMemo(() => jar.get("token"), [jar]);
  const setToken = useCallback((token: string) => jar.set("token", token, { maxAge: 60 * 60 * 24 * 14 }), [jar]);
  const removeToken = useCallback(() => jar.remove("token"), [jar]);

  return {
    token,
    setToken,
    removeToken,
  };
};
