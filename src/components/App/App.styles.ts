import { css } from "@emotion/react";
import emotionReset from "emotion-reset";
import { colors } from "lib/theme";

import karlaRegularWoff2 from "assets/fonts/karla-v23-latin-regular.woff2";
import karlaRegularWoff from "assets/fonts/karla-v23-latin-regular.woff";

import karla700Woff2 from "assets/fonts/karla-v23-latin-700.woff2";
import karla700Woff from "assets/fonts/karla-v23-latin-700.woff";

export const globalStyles = css`
  ${emotionReset}

  *,*::before,*::after {
    box-sizing: border-box;
  }

  @font-face {
    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
    font-family: "Karla";
    font-style: normal;
    font-weight: 400;
    src: url(${karlaRegularWoff2}) format("woff2"),
      /* Chrome 36+, Opera 23+, Firefox 39+ */ url(${karlaRegularWoff})
        format("woff"); /* Chrome 5+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* karla-700 - latin */
  @font-face {
    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
    font-family: "Karla";
    font-style: normal;
    font-weight: 700;
    src: url(${karla700Woff2}) format("woff2"),
      /* Chrome 36+, Opera 23+, Firefox 39+ */ url(${karla700Woff})
        format("woff"); /* Chrome 5+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  html,
  body,
  #root {
    height: 100%;
    width: 100%;
  }

  #root {
    display: flex;
    flex-direction: column;
  }

  body {
    font-family: Karla, Arial, Helvetica, sans-serif;
  }
`;
