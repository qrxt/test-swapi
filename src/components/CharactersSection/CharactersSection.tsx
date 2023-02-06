import React from "react";
import {
  charactersSectionCharactersStyles,
  charactersSectionLanguageStyles,
  charactersSectionStyles,
  charactersSectionTitleEmphasisStyles,
  charactersSectionTitleStyles,
} from "./CharactersSection.style";
import { Character } from "types/people";
import Container from "components/Container";
import LanguageSwitcher from "components/LanguageSwitcher";
import CharactersListContainer from "components/CharactersList/CharactersListContainer";

interface CharactersSectionProps {
  characters: Character[];
}

function CharactersSection(props: CharactersSectionProps) {
  const { characters = [] } = props;

  return (
    <section css={charactersSectionStyles}>
      <Container>
        <div css={charactersSectionLanguageStyles}>
          <LanguageSwitcher />
        </div>
        <h2 css={charactersSectionTitleStyles}>
          {characters.length}{" "}
          <span css={charactersSectionTitleEmphasisStyles}>Peoples</span> for
          you to choose your favorite
        </h2>
        <div css={charactersSectionCharactersStyles}>
          <CharactersListContainer />
        </div>
      </Container>
    </section>
  );
}

export default CharactersSection;
