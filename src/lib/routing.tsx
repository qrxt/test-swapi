import React, { Suspense } from "react";
import NotFoundPage from "components/pages/NotFoundPage";
// import MainPage from "components/pages/MainPage";
// import CharactersPage from "components/pages/CharactersPage";
import { RouteObject } from "react-router-dom";

export enum AppRoutes {
  MAIN_PAGE = "mainPage",
  CHARACTERS_PAGE = "charactersPage",
}

export const routePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN_PAGE]: "/",
  [AppRoutes.CHARACTERS_PAGE]: "/characters",
};

export const routeNames: Record<AppRoutes, string> = {
  [AppRoutes.MAIN_PAGE]: "Home",
  [AppRoutes.CHARACTERS_PAGE]: "Characters",
};

const Home = React.lazy(() => import("components/pages/MainPage"));
const Characters = React.lazy(() => import("components/pages/CharactersPage"));

export const routerConfig: Record<AppRoutes, RouteObject> = {
  [AppRoutes.MAIN_PAGE]: {
    path: routePath.mainPage,
    element: (
      <Suspense fallback={<p>...</p>}>
        <Home />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<p>...</p>}>
        <NotFoundPage />
      </Suspense>
    ),
  },
  [AppRoutes.CHARACTERS_PAGE]: {
    path: routePath.charactersPage,
    element: <Characters />,
    errorElement: <NotFoundPage />,
  },
};

export const routeEntries = Object.entries(routerConfig) as [
  AppRoutes,
  RouteObject
][];
