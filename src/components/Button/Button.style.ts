import { css, SerializedStyles } from "@emotion/react";
import { colors } from "lib/theme";

export type ButtonTheme = "orange" | "green";

export const buttonStyles = (theme: ButtonTheme) => {
  const buttonThemes: Record<ButtonTheme, SerializedStyles> = {
    orange: css`
      background: ${colors.orange};
    `,
    green: css`
      background: ${colors.green};
    `,
  };

  return css`
    ${buttonThemes[theme]}

    display: block;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    color: ${colors.darkGray};
    font-weight: 700;
    font-size: 23px;
    line-height: 27px;
    padding: 20px 30px;
    border-radius: 11px;
    box-shadow: inset 0px -9px 0px rgba(0, 0, 0, 0.18);
    border: none;

    &:active:not(:disabled) {
      box-shadow: inset 0px -9px 0px rgba(0, 0, 0, 0.09);
    }

    &:disabled {
      background: ${colors.lightGreen};
      cursor: not-allowed;
    }
  `;
};
