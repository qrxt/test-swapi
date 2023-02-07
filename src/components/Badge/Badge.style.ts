import { css } from "@emotion/react";
import { colors } from "lib/theme";

export const badgeStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const badgeCircleStyles = css`
  height: 38px;
  width: 38px;
  margin-bottom: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 3px solid ${colors.darkGray};
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
`;

export const badgeTextStyles = css`
  color: ${colors.gray};
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
`;

export const badgeCursorStyles = css`
  cursor: help;
`;
