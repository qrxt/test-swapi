import { css } from "@emotion/react";

export const charactersListStyles = css`
  display: grid;
  gap: 35px;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));

  @media screen and (max-width: 820px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;

export const charactersListItemStyles = css`
  width: 100%;
  margin-bottom: 45px;
`;

export const loadMoreIndicatorStyles = css`
  display: flex;
  justify-content: center;
`;

export const loadMoreWrapperStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const loadMoreButtonStyles = css`
  width: 250px;
  display: flex;
  position: relative;
  justify-content: center;
  text-align: center;
`;

export const loadMoreLoadingIndicatorStyles = css`
  position: absolute;
  right: 25px;
`;

export const filterSelectWrapperStyles = css`
  margin-bottom: 25px;
  width: 150px;
`;
