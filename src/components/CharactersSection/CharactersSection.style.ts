import { css } from "@emotion/react";
import { colors } from "lib/theme";

export const charactersSectionStyles = css`
  flex-grow: 1;
`;

export const charactersSectionLanguageStyles = css`
  padding: 30px 0 0;
  margin-bottom: 30px;

  display: flex;
  justify-content: flex-end;
`;

export const charactersSectionTitleStyles = css`
  color: ${colors.black};
  font-weight: 700;
  font-size: 35px;
  line-height: 41px;
  text-align: center;
  letter-spacing: 3px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  margin-bottom: 65px;
`;

export const charactersSectionTitleEmphasisStyles = css`
  font-weight: 900;
`;

export const charactersSectionCharactersStyles = css`
  max-width: 1200px;
  margin: 0 auto;
`;
