import { css, SerializedStyles } from "@emotion/react";
import { colors } from "lib/theme";

export type ButtonTheme = "orange" | "green";

export const buttonStyles = (theme: ButtonTheme) => {
  const buttonThemes: Record<ButtonTheme, SerializedStyles> = {
    orange: css`
      background: ${colors.orange};
      color: red;
    `,
    green: css`
      background: green;
      color: blue;
    `,
  };

  return css`
    ${buttonThemes[theme]}

    &:active {
      box-shadow: inset 0px -9px 0px rgba(0, 0, 0, 0.09);
    }

    cursor: pointer;
    color: ${colors.darkGray};
    font-weight: 700;
    font-size: 23px;
    line-height: 27px;
    padding: 20px 30px;
    border-radius: 11px;
    box-shadow: inset 0px -9px 0px rgba(0, 0, 0, 0.18);
    border: none;
  `;
};
