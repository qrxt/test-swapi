import Button from "components/Button";
import React from "react";
import {
  notFoundReturnButtonStyles,
  notFoundStyles,
  notFoundTextStyles,
  notFoundWrapperStyles,
} from "./NotFoundSection.style";

function NotFound() {
  return (
    <>
      <div css={notFoundWrapperStyles}></div>
      <p css={notFoundTextStyles}>404</p>
    </>
  );
}

function NotFoundSection() {
  return (
    <section css={notFoundStyles}>
      <NotFound />
      <Button theme="green" customStyles={notFoundReturnButtonStyles}>
        Return
      </Button>
    </section>
  );
}

export default NotFoundSection;
