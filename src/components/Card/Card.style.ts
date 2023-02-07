import { css } from "@emotion/react";
import { colors } from "lib/theme";

export const cardStyles = css`
  filter: drop-shadow(4px 4px 4px rgba(33, 33, 33, 0.1));
  background-color: ${colors.lightGray};
  text-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);
  padding: 6px 25px 12px;
  border-radius: 8px;
  min-height: 142px;
`;

export const cardTitleStyles = css`
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  margin-bottom: 20px;
`;

export const cardContentStyles = css`
  text-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);
`;
