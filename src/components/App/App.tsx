import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "components/pages/MainPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
      children: [],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
