import { css } from "@emotion/react";
import { colors } from "lib/theme";
import notFoundImage from "assets/images/star.png";

export const notFoundStyles = css`
  height: 100%;
  background-color: ${colors.darkPurple};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1200px) {
  }
`;

export const notFoundWrapperStyles = css`
  width: 100%;
  height: 100%;
  position: absolute;
  background: url(${notFoundImage}) center center/690px 623px no-repeat;

  @media screen and (max-width: 1200px) {
    background: url(${notFoundImage}) center center/490px 423px no-repeat;
  }

  @media screen and (max-width: 1000px) {
    background: url(${notFoundImage}) center center/390px 323px no-repeat;
  }

  @media screen and (max-width: 700px) {
    background: url(/src/assets/images/star.png) center center/224px 200px
      no-repeat;
  }
`;

export const notFoundTextStyles = css`
  font-size: 700px;
  font-weight: 700;
  line-height: 818px;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 4px;

  @media screen and (max-width: 1200px) {
    font-size: 500px;
    line-height: 518px;
  }

  @media screen and (max-width: 1000px) {
    font-size: 400px;
    line-height: 418px;
  }

  @media screen and (max-width: 700px) {
    font-size: 200px;
    line-height: 218px;
  }
`;

export const notFoundReturnButtonStyles = css`
  width: 230px;
`;
