import Button from "components/Button";
import CharacterCard from "components/CharacterCard";
import LoadingIndicator from "components/LoadingIndicator";
import { camelize } from "lib/camelize";
import React from "react";
import { FetchNextPageOptions, InfiniteQueryObserverResult } from "react-query";
import { Character, Gender } from "types/people";
import { Response } from "types/response";
import {
  charactersListItemStyles,
  charactersListStyles,
  loadMoreButtonStyles,
  loadMoreIndicatorStyles,
  loadMoreLoadingIndicatorStyles,
  loadMoreWrapperStyles,
} from "./CharactersList.style";

type CharactersResponse = Response<Character>;

interface CharactersListProps {
  characters: Character[];
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
    characters = [],
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
  } = props;

  if (isLoading && !characters.length) {
    return (
      <div css={loadMoreIndicatorStyles}>
        <LoadingIndicator size="80px" />
      </div>
    );
  }

  if (error) return <p>{`An error has occurred: ${error}`}</p>;

  return (
    <div>
      <ul css={charactersListStyles}>
        {characters.map((char, idx) => (
          <MemoizedCharactersListItem character={char} key={idx} />
        ))}
      </ul>

      <div css={loadMoreWrapperStyles}>
        <Button
          theme="green"
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isLoading}
          customStyles={loadMoreButtonStyles}
        >
          {isLoading && (
            <div css={loadMoreLoadingIndicatorStyles}>
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
