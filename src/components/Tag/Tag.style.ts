import { css, SerializedStyles } from "@emotion/react";
import { colors } from "lib/theme";
import { TagTheme } from "./Tag";

export const tagStyles = (theme: TagTheme) => {
  const tagThemes: Record<TagTheme, SerializedStyles> = {
    green: css`
      background: ${colors.green};
    `,
    yellow: css`
      background: ${colors.yellow};
    `,
    magenta: css`
      background: ${colors.magenta};
    `,
    cyan: css`
      background: ${colors.cyan};
    `,
  };

  return css`
    ${tagThemes[theme]}

    box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.18);
    border-radius: 11px;
    min-width: 60px;
    min-height: 16px;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: ${colors.darkGray};
  `;
};
