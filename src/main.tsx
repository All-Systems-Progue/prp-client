import "./index.css";

import { MantineProvider } from "@mantine/core";
import { NotificationsProvider, showNotification } from "@mantine/notifications";
import React from "react";
import { CookiesProvider } from "react-cookie";
import ReactDOM from "react-dom";
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { X } from "tabler-icons-react";

import App from "./App";
import { store } from "./redux/store";
// import { ReactQueryDevtools } from "react-query/devtools";
import { camel2Title } from "./utils/error";

/* eslint-disable  @typescript-eslint/no-explicit-any */

/**
 * GLOBAL ERROR HANDLING
 * Async app state error handling
 */
const queryClient = new QueryClient({
  mutationCache: new MutationCache({
    onError: (error: any) =>
      showNotification({
        title: "Error",
        message: error.message,
        color: "red",
        radius: "lg",
        icon: <X />,
      }),
  }),
  queryCache: new QueryCache({
    onError: (error: any, query: any) =>
      showNotification({
        title: "Error",
        message: camel2Title(query.queryKey[0]) + " " + error,
        color: "red",
        radius: "lg",
        icon: <X />,
      }),
  }),
});

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CookiesProvider>
        <Provider store={store}>
          <MantineProvider
            theme={{
              spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 },
              loader: "dots",
              colorScheme: "light",
              colors: {
                brand: ["#048E80"],
              },
              // primaryColor: "brand",
            }}
          >
            <NotificationsProvider autoClose={3000} limit={5}>
              <App />
            </NotificationsProvider>
          </MantineProvider>
        </Provider>
      </CookiesProvider>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
