import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "components/pages/MainPage";
import { globalStyles } from "./App.styles";
import { Global } from "@emotion/react";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
      children: [],
    },
  ]);

  return (
    <>
      <Global styles={globalStyles} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
