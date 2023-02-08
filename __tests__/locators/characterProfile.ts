import { getAllByTestId, getByTestId } from "@testing-library/react";

export default function characterProfile(nodeElement: HTMLElement) {
  return {
    nodeElement,
    wrapper() {
      return getByTestId(nodeElement, "character-profile-wrapper");
    },
    name() {
      return getByTestId(nodeElement, "character-profile-name");
    },

    profilePic() {
      return getByTestId(nodeElement, "character-profile-pic");
    },

    hairColorName() {
      return getByTestId(nodeElement, "character-profile-hair-color-name");
    },
    hairColorValue() {
      return getByTestId(nodeElement, "character-profile-hair-color-value");
    },
    skinColorName() {
      return getByTestId(nodeElement, "character-profile-skin-color-name");
    },
    skinColorValue() {
      return getByTestId(nodeElement, "character-profile-skin-color-value");
    },
    eyeColorName() {
      return getByTestId(nodeElement, "character-profile-eye-color-name");
    },
    eyeColorValue() {
      return getByTestId(nodeElement, "character-profile-eye-color-value");
    },

    badgeDescriptions() {
      return getAllByTestId(nodeElement, "badge-description");
    },
    badgeValues() {
      return getAllByTestId(nodeElement, "badge-value");
    },

    tagsWrapper() {
      return getByTestId(nodeElement, "character-profile-tags");
    },
    tags() {
      return getAllByTestId(nodeElement, "character-profile-tag");
    },
  };
}
