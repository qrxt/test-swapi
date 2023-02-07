import React from "react";
import { Character } from "types/people";
import CharactersList from "./CharactersList";

interface CharactersListContainerProps {
  isLoading: boolean;
  error: Error | null;
  data: Character[];
}

function CharactersListContainer(props: CharactersListContainerProps) {
  const { isLoading, error, data } = props;
  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{`An error has occurred: ${error}`}</p>;

  return <CharactersList characters={data} />;
}

export default CharactersListContainer;
