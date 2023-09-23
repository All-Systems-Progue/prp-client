import { CookieJar } from "@utils/cookies";
import { createContext, ReactNode, useContext } from "react";

const CookiesContext = createContext<CookieJar>(new CookieJar());

type CookiesProviderProps = {
  value: CookieJar;
  children: ReactNode;
};

export const CookiesProvider = ({ value, children }: CookiesProviderProps) => {
  return <CookiesContext.Provider value={value}>{children}</CookiesContext.Provider>;
};

export const useCookies = () => useContext(CookiesContext);
