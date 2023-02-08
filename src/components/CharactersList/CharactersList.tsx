import Button from "components/Button";
import CharacterCard from "components/CharacterCard";
import LoadingIndicator from "components/LoadingIndicator";
import { camelize } from "lib/camelize";
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
} from "./CharactersList.style";
import Modal from "react-modal";
import CharacterProfile from "components/CharacterProfile";
import { ClassNames } from "@emotion/react";
import { testStyles } from "components/CharacterProfile/CharacterProfile.style";

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

interface CharactersListItemProps {
  character: Character;
  setSelectedCharacter: React.Dispatch<React.SetStateAction<Character | null>>;
  setIsCharacterOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function CharactersListItem(props: CharactersListItemProps) {
  const { character, setSelectedCharacter, setIsCharacterOpen } = props;
  // const preparedCharacter = prepareCharacterData(character);
  return (
    <li
      css={charactersListItemStyles}
      onClick={() => {
        setSelectedCharacter(character);
        setIsCharacterOpen(true);
      }}
    >
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
  const [isCharacterOpen, setIsCharacterOpen] = useState(false);
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
  /* eslint-disable indent */
  const filteredCharacters =
    filter?.value === "all"
      ? preparedCharacters
      : preparedCharacters.filter(
          (character) => character.eyeColor === filter?.value
        );
  /* eslint-enable indent */

  if (error) return <p>{`An error has occurred: ${error}`}</p>;

  return (
    <div>
      <ClassNames>
        {({ css }) =>
          selectedCharacter && (
            <Modal
              onRequestClose={() => {
                setIsCharacterOpen(false);
              }}
              isOpen={isCharacterOpen}
              overlayClassName={{
                base: "overlay-base",
                afterOpen: "overlay-after",
                beforeClose: "overlay-before",
              }}
              className={{
                base: "content-base",
                afterOpen: "content-after",
                beforeClose: "content-before",
              }}
              portalClassName={css(testStyles)}
            >
              <CharacterProfile character={selectedCharacter} />
            </Modal>
          )
        }
      </ClassNames>

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
          <MemoizedCharactersListItem
            character={char}
            setSelectedCharacter={setSelectedCharacter}
            setIsCharacterOpen={setIsCharacterOpen}
            key={idx}
          />
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
