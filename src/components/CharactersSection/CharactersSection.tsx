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

function last<T>(arr: T[]) {
  return arr[arr.length - 1];
}

function CharactersSection() {
  const { error, data, isFetching, fetchNextPage } = useInfiniteQuery<
    CharactersResponse,
    Error
  >(
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
  const lastEl = last(data?.pages || []);
  const hasMore = lastEl && Boolean(lastEl.next);

  return (
    <section css={charactersSectionStyles}>
      <Container>
        <div css={charactersSectionLanguageStyles}>
          {/* Here be dragons... */}
          {/* <LanguageSwitcher /> */}
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
            hasNextPage={hasMore}
          />
        </div>
      </Container>
    </section>
  );
}

export default CharactersSection;
