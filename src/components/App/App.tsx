import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { globalStyles } from "./App.styles";
import { Global } from "@emotion/react";
import { routerConfig } from "lib/routing";
import { QueryClient, QueryClientProvider } from "react-query";
import Modal from "react-modal";
import LoadingIndicator from "components/LoadingIndicator";

export const routes = Object.values(routerConfig);
const router = createBrowserRouter(routes);

const queryClient = new QueryClient();

Modal.setAppElement("body");
function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<LoadingIndicator />}>
          <RouterProvider router={router} />
        </Suspense>
      </QueryClientProvider>
    </>
  );
}

export default App;
