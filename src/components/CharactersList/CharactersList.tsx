import Button from "components/Button";
import CharacterCard from "components/CharacterCard";
import LoadingIndicator from "components/LoadingIndicator";
import { camelize } from "lib/camelize";
import { colors } from "lib/theme";
import React, { useState } from "react";
import { FetchNextPageOptions, InfiniteQueryObserverResult } from "react-query";
import Select from "react-select";
import { Character, Gender } from "types/people";
import { Response } from "types/response";
import {
  charactersListItemStyles,
  charactersListStyles,
  filterSelectLabelStyles,
  filterSelectStyles,
  filterSelectWrapperStyles,
  loadMoreButtonStyles,
  loadMoreIndicatorStyles,
  loadMoreLoadingIndicatorStyles,
  loadMoreWrapperStyles,
  modalStyles,
} from "./CharactersList.style";
import Modal from "react-modal";
import CharacterProfile from "components/CharacterProfile";

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
  // const preparedCharacter = prepareCharacterData(character);
  return (
    <li css={charactersListItemStyles}>
      <CharacterCard character={character} />
    </li>
  );
}

const MemoizedCharactersListItem = React.memo(CharactersListItem);

export type Filter = { value: string; label: string };
const filterOptions: Filter[] = [
  { value: "all", label: "All" },
  { value: "brown", label: "Brown" },
  { value: "red", label: "Red" },
  { value: "blue", label: "Blue" },
  { value: "white", label: "White" },
];

function CharactersList(props: CharactersListProps) {
  const {
    characters = [],
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
  } = props;
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null
  );
  const [filter, setFilter] = useState<Filter | null>(
    filterOptions.find(({ value }) => value === "all") || null
  );

  if (isLoading && !characters.length) {
    return (
      <div css={loadMoreIndicatorStyles}>
        <LoadingIndicator size="80px" />
      </div>
    );
  }

  const preparedCharacters = characters.map(prepareCharacterData);
  const filteredCharacters =
    filter?.value === "all"
      ? preparedCharacters
      : preparedCharacters.filter(
          (character) => character.eyeColor === filter?.value
        );

  if (error) return <p>{`An error has occurred: ${error}`}</p>;

  return (
    <div>
      <Modal
        isOpen={true}
        // onAfterOpen={afterOpenModal}
        // onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Example Modal"
      >
        <CharacterProfile />
      </Modal>

      <div css={filterSelectWrapperStyles}>
        <label css={filterSelectLabelStyles}>
          <span>eye color</span>
          <Select
            options={filterOptions}
            value={filter}
            defaultValue={filter}
            onChange={(val) => setFilter(val)}
            components={{
              IndicatorSeparator: () => null,
            }}
            styles={filterSelectStyles}
          />
        </label>
      </div>

      <ul css={charactersListStyles}>
        {filteredCharacters.map((char, idx) => (
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
