import { css } from "@emotion/react";
import { colors } from "lib/theme";

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
  display: flex;
  align-items: center;
`;

export const notFoundImageStyles = css`
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 490px;
  height: 423px;

  @media screen and (max-width: 1200px) {
    width: 490px;
    height: 423px;
  }

  @media screen and (max-width: 1000px) {
    width: 390px;
    height: 323px;
  }

  @media screen and (max-width: 700px) {
    width: 200px;
    height: 176px;
  }
`;

export const notFoundTextStyles = css`
  font-size: 500px;
  font-weight: 700;
  line-height: 518px;
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
    font-size: 190px;
    line-height: 208px;
  }
`;

export const notFoundReturnButtonStyles = css`
  width: 230px;
`;
