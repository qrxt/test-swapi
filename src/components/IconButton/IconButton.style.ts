import { css } from "@emotion/react";
import { colors } from "lib/theme";

export const iconButtonStyles = css`
  display: block;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  color: ${colors.white};
  background-color: ${colors.green};
  border-radius: 50%;
  font-weight: 700;
  font-size: 23px;
  line-height: 27px;
  border-radius: 11px;
  box-shadow: inset 0px -3px 0px rgba(0, 0, 0, 0.18);
  border: none;

  &:active:not(:disabled) {
    box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.09);
  }

  &:disabled {
    background-color: ${colors.lightGreen};
    cursor: not-allowed;
  }
`;
