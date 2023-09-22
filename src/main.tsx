import "@mantine/core/styles.css";
import "./index.css";

import { MantineProvider } from "@mantine/core";
import { Notifications, showNotification } from "@mantine/notifications";
import { store } from "@redux/store";
import { IconX } from "@tabler/icons-react";
// import { ReactQueryDevtools } from "react-query/devtools";
import { camel2Title } from "@utils/error";
import { theme } from "@utils/theme";
import React from "react";
import { CookiesProvider } from "react-cookie";
import { createRoot } from "react-dom/client";
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";

import { App } from "./App";

/* eslint-disable  @typescript-eslint/no-explicit-any */

/**
 * GLOBAL ERROR HANDLING
 * Async app state error handling
 */
const queryClient = new QueryClient({
  mutationCache: new MutationCache({
    onError: (error: unknown) =>
      showNotification({
        title: "Error",
        message: error instanceof Error ? error.message : (error as string),
        color: "red",
        radius: "lg",
        icon: <IconX />,
      }),
  }),
  queryCache: new QueryCache({
    onError: (error: unknown, query: any) =>
      showNotification({
        title: "Error",
        message: camel2Title(query.queryKey[0]) + " " + (error instanceof Error ? error.message : (error as string)),
        color: "red",
        radius: "lg",
        icon: <IconX />,
      }),
  }),
});

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CookiesProvider>
        <Provider store={store}>
          <MantineProvider theme={theme} defaultColorScheme="light">
            <Notifications autoClose={3000} limit={5} zIndex={10000} />
            <App />
          </MantineProvider>
        </Provider>
      </CookiesProvider>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  </React.StrictMode>,
);
