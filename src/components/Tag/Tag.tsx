import { SerializedStyles } from "@emotion/react";
import React from "react";
import { tagStyles } from "./Tag.style";

export type TagTheme = "yellow" | "green" | "magenta" | "cyan";

interface TagProps {
  children: React.ReactNode;
  customStyles?: SerializedStyles;
  theme?: TagTheme;
}

function Tag(props: TagProps) {
  const { children, customStyles = "", theme = "green" } = props;

  return <div css={[tagStyles(theme), customStyles]}>{children}</div>;
}

export default Tag;
