import { SerializedStyles } from "@emotion/react";
import React from "react";
import { buttonStyles, ButtonTheme } from "./Button.style";

interface ButtonProps {
  children: React.ReactNode;
  theme: ButtonTheme;
  customStyles?: SerializedStyles;
}

// TODO: as parameter
function Button(props: ButtonProps) {
  const { children, theme, customStyles } = props;
  console.log(theme);

  return <button css={[buttonStyles(theme), customStyles]}>{children}</button>;
}

export default Button;
