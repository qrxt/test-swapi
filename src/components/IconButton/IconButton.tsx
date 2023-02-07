import React from "react";
import { iconButtonStyles } from "./IconButton.style";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
function IconButton(props: IconButtonProps) {
  const { children, ...rest } = props;

  return (
    <button css={iconButtonStyles} {...rest}>
      {children}
    </button>
  );
}

export default IconButton;
