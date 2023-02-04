import { css } from "@emotion/react";
import bannerImage from "assets/images/banner.png";
import { colors } from "lib/theme";

export const mainSectionStyles = css`
  color: ${colors.white};
  flex-grow: 1;
  box-shadow: 0px 8px 7px -4px rgba(255, 255, 255, 0.25) inset;
  background: url(${bannerImage}) 79% 60% / 793px 720px no-repeat,
    linear-gradient(180deg, #1f2a63 0%, #17002f 100%);

  @media screen and (max-width: 1200px) {
    background: url(${bannerImage}) right 40% / 593px 520px no-repeat,
      linear-gradient(180deg, #1f2a63 0%, #17002f 100%);
  }

  @media screen and (max-width: 900px) {
    padding-top: 260px;
    background: url(${bannerImage}) top center / 493px 420px no-repeat,
      linear-gradient(180deg, #1f2a63 0%, #17002f 100%);
  }
`;

export const mainSectionInnerStyles = css`
  padding: 127px 0;
  max-width: 500px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 900px) {
    max-width: 100%;
  }
`;

export const mainSectionTitleStyles = css`
  margin-bottom: 65px;

  font-size: 72px;
  line-height: 84px;
  font-weight: 400;
  letter-spacing: 4px;

  @media screen and (max-width: 900px) {
    font-size: 64px;
  }
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

  @media screen and (max-width: 900px) {
    align-self: center;
  }
`;
