import { css } from "@emotion/react";
import CharacterCard from "components/CharacterCard";
import IconButton from "components/IconButton";
import LoadingIndicator from "components/LoadingIndicator";
import React from "react";
import { Character } from "types/people";
import {
  charactersListItemStyles,
  charactersListStyles,
} from "./CharactersList.style";

interface CharactersListProps {
  characters: Character[];
  isLoading: boolean;
  error: Error | null;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  hasPrevious: boolean;
  hasMore: boolean;
}

function CharactersList(props: CharactersListProps) {
  const { characters, isLoading, error, setPage, hasPrevious, hasMore } = props;

  if (error) return <p>{`An error has occurred: ${error}`}</p>;

  return (
    <div>
      <ul css={charactersListStyles}>
        {characters.map((character, idx) => (
          <li key={idx} css={charactersListItemStyles}>
            <CharacterCard character={character} />
          </li>
        ))}
      </ul>

      <div
        css={css`
          display: flex;
          justify-content: flex-end;
          padding: 10px 0;
          align-items: center;
        `}
      >
        {isLoading && (
          <div
            css={css`
              margin-right: 20px;
            `}
          >
            <LoadingIndicator />
          </div>
        )}

        <IconButton
          css={css`
            margin-right: 10px;
          `}
          disabled={!hasPrevious}
          onClick={() => {
            setPage((prev: number) => prev - 1);
          }}
        >
          {"<"}
        </IconButton>
        <IconButton
          disabled={!hasMore}
          onClick={() => {
            setPage((prev: number) => prev + 1);
          }}
        >
          {">"}
        </IconButton>
      </div>
    </div>
  );
}

export default CharactersList;
