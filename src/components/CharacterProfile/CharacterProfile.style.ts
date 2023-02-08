import { css } from "@emotion/react";
import { colors } from "lib/theme";
import maleImage from "assets/images/male.png";
import femaleImage from "assets/images/female.png";
import hermaphroditeImage from "assets/images/hermaphrodite.png";
import { Gender } from "types/people";

export const characterProfileStyles = css`
  display: flex;
  background: linear-gradient(180deg, #17002f 42.19%, #1f2a63 100%);
  height: 100%;
  width: 100%;
  color: ${colors.white};

  @media screen and (max-width: 796px) {
    flex-direction: column;
  }
`;

export const characterProfilePicStyles = (gender: Gender) => {
  const genderToImage: Record<Gender, string> = {
    [Gender.Male]: maleImage,
    [Gender.Female]: femaleImage,
    [Gender.Unknown]: hermaphroditeImage,
    [Gender.NotApplicable]: hermaphroditeImage,
  };

  return css`
    width: 365px;
    height: 100%;

    padding: 15px;

    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    background: ${colors.darkBlue} url(${genderToImage[gender]}) center
      center/contain no-repeat;

    @media screen and (max-width: 796px) {
      width: 100%;
    }
  `;
};

export const characterProfileDataStyles = css`
  padding: 30px 15px 25px;

  display: flex;
  flex-direction: column;

  @media screen and (max-width: 796px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const characterProfileNameStyles = css`
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;

  margin-bottom: 25px;

  @media screen and (max-width: 796px) {
    width: 100%;
  }
`;

export const characteristicsListStyles = css`
  width: 265px;
  padding: 15px 25px;

  box-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);
  border-radius: 8px;
  background-color: ${colors.white};
  border-radius: 8px;

  color: ${colors.black};

  @media screen and (max-width: 796px) {
    margin-right: 25px;
    margin-bottom: 10px;
  }
`;
export const characteristicsListItemStyles = css`
  display: flex;
  align-items: center;
`;
export const characteristicsDefinitionStyles = css`
  margin-right: 5px;

  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;
export const characteristicsValueStyles = css``;

export const tagsListStyles = css`
  display: flex;
`;
export const tagsListItemStyles = css`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const badgesListStyles = css`
  display: flex;
  margin-top: auto;

  @media screen and (max-width: 796px) {
    margin-bottom: 10px;
  }
`;
export const badgesListItemStyles = css`
  color: ${colors.black};
  background-color: ${colors.white};
  box-shadow: 4px 4px 24px rgba(1, 17, 38, 0.2);
  border-radius: 8px;

  padding: 17px 30px;

  &:not(:last-child) {
    margin-right: 25px;
  }
`;

export const testStyles = css`
  .overlay-base {
    padding: 1rem;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0);
    opacity: 0;
    outline: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .overlay-after {
    background-color: rgba(0, 0, 0, 0.8);
    opacity: 1;
  }

  .overlay-before {
    background-color: rgba(0, 0, 0, 0);
    opacity: 0;
  }

  .content-base {
    position: relative;
    top: auto;
    left: auto;
    right: auto;
    bottom: auto;
    margin: 0 auto;
    border: 0;
    outline: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 0%;
    width: 100%;
    background-color: transparent;
  }

  .content-after {
    width: 796px;
    height: 371px;

    @media screen and (max-width: 796px) {
      width: 100%;
      height: 100%;
    }
  }

  .content-before {
    width: 0%;
    height: 0%;
    background-color: transparent;
  }
`;
