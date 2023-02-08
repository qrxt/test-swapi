import React from "react";
import MainPage from "components/pages/MainPage";
import NotFoundPage from "components/pages/NotFoundPage";
import CharactersPage from "components/pages/CharactersPage";
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

export const routerConfig: Record<AppRoutes, RouteObject> = {
  [AppRoutes.MAIN_PAGE]: {
    path: routePath.mainPage,
    element: <MainPage />,
    errorElement: <NotFoundPage />,
  },
  [AppRoutes.CHARACTERS_PAGE]: {
    path: routePath.charactersPage,
    element: <CharactersPage />,
    errorElement: <NotFoundPage />,
  },
};

export const routeEntries = Object.entries(routerConfig) as [
  AppRoutes,
  RouteObject
][];
