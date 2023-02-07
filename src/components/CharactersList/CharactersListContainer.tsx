import React from "react";
import { camelize } from "lib/camelize";
import { useQuery } from "react-query";
import { Character, Gender } from "types/people";
import CharactersList from "./CharactersList";

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

function CharactersListContainer() {
  const {
    isLoading,
    error,
    data = [],
  } = useQuery<Character[]>({
    queryKey: ["people"],
    queryFn: () =>
      fetch("https://swapi.dev/api/people?page=2")
        .then((res) => res.json())
        .then((x) => {
          console.log(x);
          return x;
        })
        .then((response) => response.results)
        .then((characters) => characters.map(camelize))
        .then((characters) => characters.map(convertGender)),
  });

  console.log(data);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{`An error has occurred: ${error}`}</p>;

  return <CharactersList characters={data} />;
}

export default CharactersListContainer;
