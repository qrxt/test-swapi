import React, { useState } from "react";
import {
  charactersSectionCharactersStyles,
  charactersSectionLanguageStyles,
  charactersSectionStyles,
  charactersSectionTitleEmphasisStyles,
  charactersSectionTitleStyles,
} from "./CharactersSection.style";
import Container from "components/Container";
import LanguageSwitcher from "components/LanguageSwitcher";
import CharactersListContainer from "components/CharactersList/CharactersListContainer";
import { useQuery } from "react-query";
import { Character, Gender } from "types/people";
import { camelize } from "lib/camelize";

function convertGender(character: Character) {
  const genders: Record<string, Gender> = {
    "n/a": Gender.NotApplicable,
    none: Gender.NotApplicable,
  };

  return {
    ...character,
    gender: genders[character.gender] || character.gender,
  };
}

function CharactersSection() {
  const {
    isLoading,
    error,
    data = [],
  } = useQuery<Character[], Error>({
    queryKey: ["people"],
    queryFn: () =>
      fetch("https://swapi.dev/api/people?page=2")
        .then((res) => res.json())
        .then((x) => {
          console.log(x);
          return x;
        })
        .then((response) => response.results)
        .then((characters) => characters.map(camelize))
        .then((characters) => characters.map(convertGender)),
  });

  return (
    <section css={charactersSectionStyles}>
      <Container>
        <div css={charactersSectionLanguageStyles}>
          <LanguageSwitcher />
        </div>
        <h2 css={charactersSectionTitleStyles}>
          {data.length}{" "}
          <span css={charactersSectionTitleEmphasisStyles}>Characters</span> for
          you to choose your favorite
        </h2>
        <div css={charactersSectionCharactersStyles}>
          <CharactersListContainer
            isLoading={isLoading}
            data={data}
            error={error}
          />
        </div>
      </Container>
    </section>
  );
}

export default CharactersSection;
