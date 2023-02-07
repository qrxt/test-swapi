import React from "react";
import { css } from "@emotion/react";
import { colors } from "lib/theme";

const indicatorStyles = css`
  @keyframes s2 {
    to {
      transform: rotate(1turn);
    }
  }

  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 8px solid;
  border-color: #e4e4ed;
  border-right-color: ${colors.green};
  animation: s2 1s infinite linear;
`;

function LoadingIndicator() {
  return <div css={indicatorStyles} />;
}

export default LoadingIndicator;
