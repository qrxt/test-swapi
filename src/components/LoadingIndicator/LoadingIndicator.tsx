import React from "react";
import { css } from "@emotion/react";
import { colors } from "lib/theme";

const indicatorStyles = (size: string) => css`
  @keyframes s2 {
    to {
      transform: rotate(1turn);
    }
  }

  width: ${size};
  height: ${size};
  border-radius: 50%;
  border: 8px solid;
  border-color: #e4e4ed;
  border-right-color: ${colors.green};
  animation: s2 1s infinite linear;
`;

function LoadingIndicator({ size = "30px" }: { size?: string }) {
  return <div css={indicatorStyles(size)} />;
}

export default LoadingIndicator;
