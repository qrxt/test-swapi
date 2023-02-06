import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { globalStyles } from "./App.styles";
import { Global } from "@emotion/react";
import { routerConfig } from "lib/routing";
import { QueryClient, QueryClientProvider } from "react-query";

export const routes = Object.values(routerConfig);
const router = createBrowserRouter(routes);

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
