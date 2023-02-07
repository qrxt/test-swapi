import React from "react";
import CharacterProfile from "./CharacterProfile";
import userEvent from "@testing-library/user-event";
import { getByTestId, render, screen } from "@testing-library/react";
import { Character, Gender } from "types/people";

const character: Character = {
  name: "Lord Lorem I",
  height: 180,
  mass: 90,
  gender: Gender.Male,
  birthYear: "-999",
  eyeColor: "red",
  hairColor: "black",
  skinColor: "white",
};

describe("CharacterProfile Component", () => {
  test("Should render correctly (layout test)", async () => {
    const result = render(<CharacterProfile character={character} />);
    const profileName = getByTestId(
      result.baseElement,
      "character-profile-name"
    );
    expect(profileName).toHaveTextContent("Lord Lorem");
  });
});
