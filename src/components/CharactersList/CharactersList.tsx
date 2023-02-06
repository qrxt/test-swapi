import { css } from "@emotion/react";
import CharacterCard from "components/CharacterCard";
import React from "react";
import { Character } from "types/people";
import {
  charactersListItemStyles,
  charactersListStyles,
} from "./CharactersList.style";

interface CharactersListProps {
  characters: Character[];
}

function CharactersList(props: CharactersListProps) {
  const { characters } = props;

  return (
    <ul css={charactersListStyles}>
      {characters.map((character, idx) => (
        <li key={idx} css={charactersListItemStyles}>
          <CharacterCard character={character} />
        </li>
      ))}
    </ul>
  );
}

export default CharactersList;
