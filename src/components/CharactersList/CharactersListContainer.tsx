import React from "react";
import { camelize } from "lib/camelize";
import { useQuery } from "react-query";
import { Character } from "types/people";
import CharactersList from "./CharactersList";

function CharactersListContainer() {
  const {
    isLoading,
    error,
    data = [],
  } = useQuery<Character[]>({
    queryKey: ["people"],
    queryFn: () =>
      fetch("https://swapi.dev/api/people")
        .then((res) => res.json())
        .then((response) => response.results)
        .then((characters) => characters.map(camelize)),
  });

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{`An error has occurred: ${error}`}</p>;

  return <CharactersList characters={data} />;
}

export default CharactersListContainer;
