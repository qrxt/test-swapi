import React from "react";
import {
  languageSwitcherItemStyles,
  languageSwitcherStyles,
  languageSwitcherTextStyles,
  languageSwitcherWrapperStyles,
} from "./LanguageSwitcher.style";

function LanguageSwitcher() {
  return (
    <div css={languageSwitcherWrapperStyles}>
      <p css={languageSwitcherTextStyles}>language:</p>
      <select css={languageSwitcherStyles}>
        <option value="en" css={languageSwitcherItemStyles}>
          en
        </option>
        <option value="ru" css={languageSwitcherItemStyles}>
          ru
        </option>
      </select>
    </div>
  );
}

export default LanguageSwitcher;
