import { css } from "@emotion/react";
import { colors } from "lib/theme";
import { GroupBase, StylesConfig } from "react-select";
import { Filter } from "./CharactersList";
import Modal from "react-modal";

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
  width: 210px;
`;

export const filterSelectLabelStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const filterSelectStyles: StylesConfig<
  Filter,
  false,
  GroupBase<Filter>
> = {
  container: (baseStyles) => ({
    ...baseStyles,
    width: "135px",
  }),
  control: (baseStyles) => ({
    ...baseStyles,
    borderColor: "transparent",
    background: colors.lightGray,
    borderRadius: "5px",
    boxShadow: "2px 2px 2px rgba(33, 33, 33, 0.1)",
    "&:hover": {
      borderColor: "transparent",
    },
    textAlign: "center",
    position: "relative",
  }),
  indicatorsContainer: (baseStyles) => ({
    ...baseStyles,
    position: "absolute",
    right: 0,
  }),
  dropdownIndicator: (baseStyles) => ({
    ...baseStyles,
    color: colors.black,
  }),
};

export const modalStyles: Modal.Styles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "796px",
    minHeight: "371px",
    height: "371px",
    padding: 0,
    borderRadius: 16,
    border: "none",
  },
  overlay: {
    background: "rgba(33, 33, 33, 0.5)",
  },
};
