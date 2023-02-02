import { css } from "@emotion/react";
import { colors } from "lib/theme";

export const headerStyles = css`
  background-color: ${colors.darkBlue};
  min-height: 93px;
`;

export const headerContentStyles = css`
  background-color: tomato;
  min-height: inherit;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
