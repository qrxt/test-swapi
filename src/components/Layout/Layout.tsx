import React from "react";
import { layoutStyles } from "./Layout.style";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout(props: LayoutProps) {
  const { children } = props;

  return <div css={layoutStyles}>{children}</div>;
}

export default Layout;
