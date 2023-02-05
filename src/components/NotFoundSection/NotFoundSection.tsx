import React from "react";
import Button from "components/Button";
import {
  notFoundImageStyles,
  notFoundReturnButtonStyles,
  notFoundStyles,
  notFoundTextStyles,
  notFoundWrapperStyles,
} from "./NotFoundSection.style";
import notFoundImage from "assets/images/star.png";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div css={notFoundWrapperStyles}>
      <img css={notFoundImageStyles} src={notFoundImage} />
      <p css={notFoundTextStyles}>404</p>
    </div>
  );
}

function NotFoundSection() {
  return (
    <section css={notFoundStyles}>
      <NotFound />
      <Button
        theme="green"
        as={Link}
        to="/"
        customStyles={notFoundReturnButtonStyles}
      >
        Return
      </Button>
    </section>
  );
}

export default NotFoundSection;
