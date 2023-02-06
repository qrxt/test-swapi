import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { globalStyles } from "./App.styles";
import { Global } from "@emotion/react";
import { routerConfig } from "lib/routing";

export const routes = Object.values(routerConfig);
const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
