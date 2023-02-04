import { SerializedStyles } from "@emotion/react";
import React from "react";
import { buttonStyles, ButtonTheme } from "./Button.style";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode;
  theme: ButtonTheme;
  customStyles?: SerializedStyles;
}

// TODO: as parameter
function Button(props: ButtonProps) {
  const { children, theme, customStyles, ...rest } = props;

  return (
    <button css={[buttonStyles(theme), customStyles]} {...rest}>
      {children}
    </button>
  );
}

export default Button;
