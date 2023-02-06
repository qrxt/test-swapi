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
