import { SerializedStyles } from "@emotion/react";
import React, { ComponentProps, ElementType } from "react";
import { buttonStyles, ButtonTheme } from "./Button.style";

interface ButtonOwnProps<E extends ElementType = ElementType> {
  children: React.ReactNode;
  theme: ButtonTheme;
  as?: E;
  customStyles?: SerializedStyles;
}

const defaultElement = "button";

export type ButtonProps<E extends ElementType> = ButtonOwnProps<E> &
  Omit<ComponentProps<E>, keyof ButtonOwnProps<E>>;

// TODO: as parameter
function Button<E extends ElementType = typeof defaultElement>(
  props: ButtonProps<E>
) {
  const { children, theme, customStyles, as, ...rest } = props;

  const TagName = as || defaultElement;
  return (
    <TagName css={[buttonStyles(theme), customStyles]} {...rest}>
      {children}
    </TagName>
  );
}

export default Button;
