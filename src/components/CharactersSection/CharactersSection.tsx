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
import { useQuery } from "react-query";
import { Character, Gender } from "types/people";
import { camelize } from "lib/camelize";
import CharactersList from "components/CharactersList";
import { Response } from "types/response";

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

type CharactersResponse = Response<Character>;

function fetchPeople(page = 1) {
  return fetch(`https://swapi.dev/api/people?page=${page}`).then((res) =>
    res.json()
  );
}

function prepareCharactersData(characters: Character[]) {
  return characters.map(convertGender).map(camelize);
}

function CharactersSection() {
  const [page, setPage] = useState(1);

  const { error, data, isFetching } = useQuery<CharactersResponse, Error>({
    queryKey: ["people", page],
    keepPreviousData: true,
    queryFn: () => fetchPeople(page),
  });

  const characters = prepareCharactersData(data?.results || []);

  return (
    <section css={charactersSectionStyles}>
      <Container>
        <div css={charactersSectionLanguageStyles}>
          <LanguageSwitcher />
        </div>
        <h2 css={charactersSectionTitleStyles}>
          {characters.length}{" "}
          <span css={charactersSectionTitleEmphasisStyles}>Characters</span> for
          you to choose your favorite
        </h2>
        <div css={charactersSectionCharactersStyles}>
          <CharactersList
            isLoading={isFetching}
            characters={characters}
            error={error}
            setPage={setPage}
            hasPrevious={Boolean(data?.previous)}
            hasMore={Boolean(data?.next)}
          />
        </div>
      </Container>
    </section>
  );
}

export default CharactersSection;
