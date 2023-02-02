import { css } from "@emotion/react";
import emotionReset from "emotion-reset";
import { colors } from "lib/theme";

export const globalStyles = css`
  ${emotionReset}
  *,*::before,*::after {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    min-height: 100%;
    width: 100%;
    background-color: ${colors.darkBlue};
  }
`;
