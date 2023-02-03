import React from "react";
import { containerStyles } from "./Container.style";

interface ContainerProps {
  children: React.ReactNode;
}

function Container(props: ContainerProps) {
  const { children } = props;
  return <div css={containerStyles}>{children}</div>;
}

export default Container;
