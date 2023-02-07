import Button from "components/Button";
import Container from "components/Container";
import React from "react";
import { Link } from "react-router-dom";
import {
  mainSectionDescriptionStyles,
  mainSectionInnerStyles,
  mainSectionMoreButtonStyles,
  mainSectionStyles,
  mainSectionTitleEmphasisStyles,
  mainSectionTitleStyles,
} from "./MainSection.style";

function MainSection() {
  return (
    <section css={mainSectionStyles}>
      <Container>
        <div css={mainSectionInnerStyles}>
          <p css={mainSectionTitleStyles}>
            <span css={mainSectionTitleEmphasisStyles}>Find</span> all your
            favorite <span css={mainSectionTitleEmphasisStyles}>character</span>
          </p>

          <p css={mainSectionDescriptionStyles}>
            You can find out all the information about your favorite characters
          </p>

          <Button
            theme="orange"
            customStyles={mainSectionMoreButtonStyles}
            type="button"
            as={Link}
            to="/characters"
          >
            See more...
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default MainSection;
