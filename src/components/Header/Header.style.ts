import { css } from "@emotion/react";
import { colors, fonts } from "lib/theme";

export const headerStyles = css`
  background-color: ${colors.darkBlue};
  min-height: 93px;

  box-shadow: 0px 4px 16px rgba(1, 28, 64, 0.2);

  @media screen and (max-width: 900px) {
    min-height: auto;
    padding: 10px 0;
  }
`;

export const headerLogoStyles = css`
  padding: 10px 0 0;
`;

export const headerContentStyles = css`
  min-height: 93px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    min-height: auto;
  }
`;

// TODO: maybe move to another component
// Menu

export const menuStyles = css`
  font-family: ${fonts.primary};
`;

export const menuListStyles = css`
  display: flex;
  font-size: 25px;
  line-height: 29px;
`;

export const menuItemLinkStyles = css`
  color: ${colors.white};
  text-decoration: none;
`;

export const menuItemStyles = ({ isSelected = false } = {}) => {
  const isSelectedStyles = css`
    &::before {
      content: "";
      display: block;
      width: 80%;
      height: 3px;
      background-color: ${colors.lightGreen};
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
      border-radius: 5px;
    }
  `;

  return css`
    ${isSelected && isSelectedStyles}
    position: relative;
    padding: 16px 0;

    &:not(:last-child) {
      margin-right: 75px;
    }
  `;
};
