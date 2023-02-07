import React from "react";
import {
  charactersSectionCharactersStyles,
  charactersSectionLanguageStyles,
  charactersSectionStyles,
  charactersSectionTitleEmphasisStyles,
  charactersSectionTitleStyles,
} from "./CharactersSection.style";
import Container from "components/Container";
import LanguageSwitcher from "components/LanguageSwitcher";
import { useInfiniteQuery } from "react-query";
import { Character } from "types/people";
import CharactersList from "components/CharactersList";
import { Response } from "types/response";

type CharactersResponse = Response<Character>;

function fetchPeople(page = 1) {
  return fetch(`https://swapi.dev/api/people?page=${page}`).then((res) =>
    res.json()
  );
}

function CharactersSection() {
  const { error, data, isFetching, fetchNextPage, hasNextPage } =
    useInfiniteQuery<CharactersResponse, Error>(
      ["people"],
      async ({ pageParam = 1 }) => {
        const res: CharactersResponse = await fetchPeople(pageParam);
        return res;
      },
      {
        getNextPageParam: (lastPage) => {
          if (!lastPage.next) {
            return null;
          }

          const url = new URL(lastPage.next);
          const prev = url.searchParams.get("page");
          return prev;
        },
      }
    );

  const characters =
    data?.pages.reduce<Character[]>(
      (acc, page) => [...acc, ...page.results],
      []
    ) || [];

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
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage || true}
          />
        </div>
      </Container>
    </section>
  );
}

export default CharactersSection;
