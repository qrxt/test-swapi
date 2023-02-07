import { css } from "@emotion/react";
import Button from "components/Button";
import CharacterCard from "components/CharacterCard";
import LoadingIndicator from "components/LoadingIndicator";
import { camelize } from "lib/camelize";
import React from "react";
import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from "react-query";
import { Character, Gender } from "types/people";
import { Response } from "types/response";
import {
  charactersListItemStyles,
  charactersListStyles,
} from "./CharactersList.style";

type CharactersResponse = Response<Character>;

interface CharactersListProps {
  characters?: InfiniteData<CharactersResponse>; //Character[];
  isLoading: boolean;
  error: Error | null;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<InfiniteQueryObserverResult<CharactersResponse, Error>>;
  hasNextPage: boolean;
}

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

function prepareCharacterData(character: Character) {
  return convertGender(camelize(character));
}

function CharactersListItem({ character }: { character: Character }) {
  const preparedCharacter = prepareCharacterData(character);
  return (
    <li css={charactersListItemStyles}>
      <CharacterCard character={preparedCharacter} />
    </li>
  );
}

const MemoizedCharactersListItem = React.memo(CharactersListItem);

function CharactersList(props: CharactersListProps) {
  const {
    characters = {
      pages: [],
    },
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
  } = props;

  if (isLoading && !characters.pages.length) {
    return (
      <div
        css={css`
          display: flex;
          justify-content: center;
        `}
      >
        <LoadingIndicator size="80px" />
      </div>
    );
  }

  if (error) return <p>{`An error has occurred: ${error}`}</p>;

  console.log("&&", hasNextPage);

  return (
    <div>
      <ul css={charactersListStyles}>
        {characters.pages.map((page) => {
          return page.results.map((character, idx) => {
            return (
              <MemoizedCharactersListItem character={character} key={idx} />
            );
          });
        })}
      </ul>

      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          margin-bottom: 20px;
        `}
      >
        <Button
          theme="green"
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isLoading}
          customStyles={css`
            width: 250px;
            display: flex;
            position: relative;
            justify-content: center;
            text-align: center;
          `}
        >
          {isLoading && (
            <div
              css={css`
                position: absolute;
                right: 25px;
              `}
            >
              <LoadingIndicator />
            </div>
          )}
          load more
        </Button>
      </div>
    </div>
  );
}

export default CharactersList;
