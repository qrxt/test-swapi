import { css } from "@emotion/react";
import bannerImage from "assets/images/banner.png";
import { colors } from "lib/theme";

export const mainSectionStyles = css`
  color: ${colors.white};
  box-shadow: 0px 8px 7px -4px rgba(255, 255, 255, 0.25) inset;
  // TODO: background image
  /* background: url(${bannerImage}) right center/contain no-repeat; */
`;

export const mainSectionInnerStyles = css`
  padding: 127px 0;
  max-width: 500px;
`;

export const mainSectionTitleStyles = css`
  margin-bottom: 65px;

  font-size: 72px;
  line-height: 84px;
  font-weight: 400;
  letter-spacing: 4px;
`;

export const mainSectionTitleEmphasisStyles = css`
  font-weight: 700;
`;

export const mainSectionDescriptionStyles = css`
  margin-bottom: 65px;

  font-size: 32px;
  line-height: 37px;
`;

export const mainSectionMoreButtonStyles = css`
  width: 230px;
`;
